package com.hackavix2018.cuidavix;

import android.content.Context;
import android.location.Location;
import android.location.LocationManager;
import android.location.LocationProvider;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebSettings;
import android.webkit.WebView;


public class MainActivity extends AppCompatActivity {

    private static final String URL = "http://192.168.0.101:8080/GiscarWeb/rest/syncronize/mapped/"; // Emulador

    private Location glo = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView myWebView = (WebView) findViewById(R.id.apresentacao);
        myWebView.loadUrl(URL);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

    }

    public float convertToFloat(int value){
        return (float) ((float)value/1e6);
    }
}
