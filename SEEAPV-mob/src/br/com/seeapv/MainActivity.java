package br.com.seeapv;

import java.io.IOException;
import java.net.URI;

import br.com.seeapv.util.SynchronousHttpConnection;
import android.location.Location;
import android.location.LocationManager;
import android.location.LocationProvider;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.Menu;

public class MainActivity extends Activity {

	private static final String URL = "http://192.168.0.101:8080/GiscarWeb/rest/syncronize/mapped/"; // Emulador

	private Location glo = null;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		 
		
		
		ConnectivityManager cs = (ConnectivityManager)this.getSystemService(Context.CONNECTIVITY_SERVICE);
		NetworkInfo ni = cs.getActiveNetworkInfo();
		if(ni != null && ni.isConnected()){
			LocationManager lm =  (LocationManager)this.getSystemService(Context.LOCATION_SERVICE);
			String provider = "";
			if(lm.isProviderEnabled(LocationManager.PASSIVE_PROVIDER)){
				provider = LocationManager.PASSIVE_PROVIDER;
			}else if(lm.isProviderEnabled(LocationManager.GPS_PROVIDER)){
				provider = LocationManager.GPS_PROVIDER;
			}else if(lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER)){
				provider = LocationManager.NETWORK_PROVIDER;
			}
			if(!provider.isEmpty()){
				LocationProvider lp = lm.getProvider(provider);
				Location lo = lm.getLastKnownLocation(provider);
				sendLocation(lo);
			}
		}
				
	}
	
	
	public void sendLocation(Location lo){
		this.glo = lo;
		new Thread() {
			@Override
			public void run() {
				super.run();
				Log.i("Iniciando", "Initializing");
				SynchronousHttpConnection httpConnection = new SynchronousHttpConnection();
				try {
					String data = glo == null ? "NO_DATA" : "{\"latitude\":\""+glo.getLatitude()+"\",\"latitude\":\""+glo.getLongitude()+"\"}";
					//String URL = "http://192.168.0.101:8080/GiscarWeb/syncronize/mapped/";
					//java.net.URL u = new URI("http","//192.168.0.101::8080","GiscarWeb/syncronize/mapped/").toURL();
					String response = httpConnection.post(URL,data);
					Log.i("RESPONSE", "Resposta: " + response);
				} catch (IllegalStateException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				} 
			}
		}.start();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	public float convertToFloat(int value){
		return (float) ((float)value/1e6);
	}
	
    
}
