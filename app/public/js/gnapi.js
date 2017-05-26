var xmlhttp = new XMLHttpRequest();
var url = "http://content.guardianapis.com/search?section=uk-news&show-editors-picks=true&show-fields=thumbnail&from-date=2017-05-26&to-date=2017-05-26&api-key=c0d10b90-5d69-404f-ba3a-dee30fb14a64"

xmlhttp.onreadystatchange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
  }
}
