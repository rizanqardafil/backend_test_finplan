function cariKata(text) {
  // Mengubah teks menjadi huruf kecil agar pencarian tidak bersifat case-sensitive
  text = text.toLowerCase();
  
  // Array kata yang dicari
  var kataCari = ['sang gajah', 'serigala', 'harimau'];
  
  // Array kata yang ditemukan
  var kataDitemukan = [];
  
  // Pencarian kata
  for (var i = 0; i < kataCari.length; i++) {
    var keyword = kataCari[i];
    var startIndex = 0;
    
    // Pencarian kata dalam teks dengan mempertahankan kemunculan duplikat
    while (startIndex !== -1) {
      startIndex = text.indexOf(keyword, startIndex);
      if (startIndex !== -1) {
        kataDitemukan.push(keyword);
        startIndex += keyword.length;
      }
    }
  }
  
  // Menggabungkan kata yang ditemukan dengan menggunakan tanda -
  var hasil = kataDitemukan.join(' - ');
  
  return hasil;
}

var teks = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.';
var output = cariKata(teks);

console.log(output);