$(`#btnTema`).on(`click`, function(){
    if($(`body`).attr(`data-bs-theme`) == `light`){
        $(`body`).attr(`data-bs-theme`, `dark`);
    }else{
        $(`body`).attr(`data-bs-theme`, `light`);
    }
})