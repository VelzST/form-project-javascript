export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
        this.childrenEvent();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas.
        let currentStep = step.replace(/^step\-/, '');
        let goToStep = '.step-';

        switch (currentStep) {
            case '1':
                goToStep += '2';
                this.progressBar(50);
                break;
            case '2':
                if ('prev' === direction) {
                    goToStep += '1';
                    this.progressBar(0);
                } else {
                    goToStep += '3';
                    this.progressBar(100);
                }
                break;
            case '3':
                goToStep += '2';
                this.progressBar(50);
                break;
            default:
                break;
        }
        return goToStep;
    }

    previousAction(evt) {

        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');

        $formStep.addClass('d-none');

        let $prevStep = $(this.goToStep($formStep[0].classList[1], 'prev'));
        $prevStep.removeClass('d-none');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');

        $formStep.addClass('d-none');

        let $nextStep = $(this.goToStep($formStep[0].classList[1]));
        $nextStep.removeClass('d-none');
    }


    childrenEvent(){
        $('.childGroupSelectUnder18').change( () =>{
            let valor = $('.childGroupSelectUnder18').val();
            console.log($('.childGroupSelectUnder18').val());
          
            switch (valor) {
                case '0':
                    $(".childrenData").css('display','none');
                    $(".childrenData2").css('display','none');
                    $(".childrenData3").css('display','none');
                    $(".childrenData4").css('display','none');
                    break;
                case '1':
                    $(".childrenData").css('display','flex');
                    $(".childrenData2").css('display','none');
                    $(".childrenData3").css('display','none');
                    $(".childrenData4").css('display','none');
                    break;
                case '2':
                    $(".childrenData").css('display','flex');
                    $(".childrenData2").css('display','flex');
                    $(".childrenData3").css('display','none');
                    $(".childrenData4").css('display','none');
                    break;
                case '3':
                    $(".childrenData").css('display','flex');
                    $(".childrenData2").css('display','flex');
                    $(".childrenData3").css('display','flex');
                    $(".childrenData4").css('display','none');
                    break;
                case '4':
                    $(".childrenData").css('display','flex');
                    $(".childrenData2").css('display','flex');
                    $(".childrenData3").css('display','flex');
                    $(".childrenData4").css('display','flex');
                    break;
                default:
                    break;
            }
        });
    }


    
    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progresBar = $('.progress-bar');
        $progresBar.html(percent+'%');
        $progresBar.css('width', percent +'%');
    }
    
}
