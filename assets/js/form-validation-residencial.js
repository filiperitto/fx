// Example starter JavaScript for disabling form submissions if there are invalid fields
function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  if (texto.substring(0,1) != saida){
    documento.value += texto.substring(0,1);
  }
}
limitData = () => {
  
}
$(document).ready(function() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setDate(startDate.getDate());
  endDate.setDate(endDate.getDate());
  startDate.setFullYear(startDate.getFullYear() - 75);
  endDate.setFullYear(endDate.getFullYear());
  let inicialDate = startDate.toISOString().substr(0, 10).split('-').join('-');
  let finalDate = endDate.toISOString().substr(0, 10).split('-').join('-');
  $("input[type=date]").attr("min",inicialDate).attr("max",finalDate);
  
  $(document).ready(function(){
    if($(".foreign:checked").val() == 0 ){
      $("#birthplace").parent().parent().addClass("displayNone")
    }
    $(".foreign").click(function(){
      if($(this).val() == 0){
        $("#birthplace").parent().parent().addClass("displayNone")
      } else {
        $("#birthplace").parent().parent().removeClass("displayNone")
      }
    })
    if($(".pep_close_relationship:checked").val() == 0 ){
      $("#name_pep_close_relationship, #cpf_pep, #degree_relationship_pep").parent().parent().addClass("displayNone")
    }
    $(".pep_close_relationship").click(function(){
      if($(this).val() == 0){
        $("#name_pep_close_relationship, #cpf_pep, #degree_relationship_pep").parent().parent().addClass("displayNone")
      } else {
        $("#name_pep_close_relationship, #cpf_pep, #degree_relationship_pep").parent().parent().removeClass("displayNone")
      }
    })
    $("input,select").blur(function(){
      if(
        $(this).val() == "" &&
        $(this).attr("name") != "property_complement" &&
        $(this).attr("name") != "landline" &&
        $(this).attr("name") != "cellphone"
      ){
        $(this).addClass("is-invalid");
      }
    });
    $("input,select").focus(function(){
      if($(this).val() == ""){
        $(this).removeClass("is-invalid");
      }
    });
    $("input[name=property_occupation_type]").on("click", function(){
      $("input[name=property_occupation_type]:first").prop({'checked': true})
    })

    $("#property_zipcode").keyup(function(){
      //Nova variável "cep" somente com dígitos.
      var cep = $(this).val().replace(/\D/g, '');
      //Verifica se campo cep possui valor informado.
      if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if(validacep.test(cep)) {
          $(".loadding-background").removeClass("displayNone");
          fetch ( `https://viacep.com.br/ws/${cep}/json/` )
          .then(response => {
            if (response.status != 200) {
                throw Error(response.status);
            } else {
                return response.json();
            }
          })
          .then(data => {
            if (data.erro) {
              console.log(data.erro)
              $(".loadding-background").addClass("displayNone")
            } else {
              //console.log(data)
              $("#property_address").val(data.logradouro).removeClass("is-invalid");
              $("#property_neighborhood").val(data.bairro).removeClass("is-invalid");
              $("#property_city").val(data.localidade).removeClass("is-invalid");
              $("#property_uf").val(data.uf).removeClass("is-invalid");
              $(".loadding-background").addClass("displayNone")
            }
          })
        }
      }
    })

    $("#botao").click(function(){
      var cont = 0;
      $("form input, form select").each(function(){
        if($(this).val() == ""){
          if(
            !$(this).is("#property_complement") &&
            !$(this).is("#landline") &&
            !$(this).is("#cellphone")
          ) {
            $(this).addClass("is-invalid");
            cont++;
          }
        }
      });
      if(cont == 0){
        //alert("SUMINIT")
        $("form").submit();
      } else {
        let el = document.getElementsByClassName('is-invalid');
        if(el.length){
          let elCoordenadas = el[0].scrollIntoView();
        }
      }
    });
  });
});