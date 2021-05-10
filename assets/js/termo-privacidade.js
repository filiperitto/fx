
    (window.onscroll = function () {

        var stickysidebar = getId('sticky-sidebar'),
            scrollHeight2 = 397,
            classHeader2 = 'fixed';
            classHeader3 = 'teste';
    
        //SCROLL
        window.addEventListener("scroll", scrollOn2);
    
        function scrollOn2() {
            animatedScroll2(stickysidebar, classHeader2, scrollHeight2);
        }
    
        //Função que on scroll muda o comportamento do elemento
        function animatedScroll2(element, classN, height) {
            y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
            if (y > height) {
                element.className = classN;
            } else {
                element.className = '';
            }
        }
    
        // Função toggle adiciona ou tira a class do elemento
        function toggle(element, classe) {
            element.className = element.className ? '' : classe;
        }
    
        //Função que retorna o id do elemento
        function getId(id) {
            return document.getElementById(id);
        }
    
    })();

    /*
    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            // when scroll to bottom of the page
            $( ".topics-box" ).toggleClass( 'teste' );
        } else{
            $( ".topics-box" ).toggleClass( 'teste' );
        }
    });
    */
    