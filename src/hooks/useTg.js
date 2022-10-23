const tg = window.Telegram.WebApp

export function useTg(){
    const onClose = () => {
        tg.close()
    }
    const toggleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        }else tg.MainButton.show()
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        toggleButton
    }
}