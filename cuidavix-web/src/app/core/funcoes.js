export function executarPopover(id, mensagem) {

  $(id).popover({'content': mensagem});
  $(id).popover('show');
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

}

export function fecharPopover(){
}
