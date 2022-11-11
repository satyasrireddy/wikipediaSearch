$('#find').click(function() {

    $.ajax(
      {
        url: "libs/php/wikipediaSearch.php",
        method: 'POST',
        dataType: 'json',
        data: {
        q: $('#q').val()
  
        },
        success: function(result){
          console.log(result);
  
          $('#summary').html(result['data'][0]['summary']);
          $('#elevation').html(result['data'][0]['elevation']);
          $('#geoNameId').html(result['data'][0]['geoNameId']);
          $('#lat').html(result['data'][0]['lat'])
          $('#lng').html(result['data'][0]['lng']);
          $('#countryCode').html(result['data'][0]['countryCode']);
          $('#rank').html(result['data'][0]['rank']);
          $('#lang').html(result['data'][0]['lang']);
         
   
        },
         error: function( errorThrown){
         
        // error
  
  
  
  
         }
      });
  });