const name = prompt("Assalom alaykum ismingizni kiriting");
let som = prompt("Saytga hush kelibsiz " + name + " Sizda qancha pul bor somda kiriting va harf qo'shmang");
som = som*1
const sam = 500;
const home = 250;
let dollar = som / 11000.34;
let eruo = som / 12354.03;
const dollar2 = ((dollar).toFixed(2));
const euro2 = ((eruo).toFixed(2));
const muzey1 = 120;
const muzey = ((muzey1 / 12354.03 * 11000.34 ).toFixed(2));
const sam_euro = ((sam/11000.34*12354.03).toFixed(2));
const sam_som = ((sam/11000.34).toFixed(10));
const home_euro = ((home/11000.34*12354.03).toFixed(2));
const home_som = ((home/11000.34).toFixed(10));
const muzey_euro = ((muzey/11000.34*12354.03).toFixed(2));
const muzey_som = ((muzey/11000.34).toFixed(10));
const kerak = 100000000*11000.34;

document.write("Dollarda " + dollar2 + " 💵 pulingiz bor <br>");
document.write("Yevroda " + euro2 + " 💶 pulinigiz bor <br>");
document.write("Samalyotda ketish chipta narxi dollarda " +  sam + "💵 euroda " + sam_euro + "💶 so'mda " + sam_som + "💶-💵 <br> ")
document.write("Mehmonxona to'lovi (to'lov safar davomiyligi uchun) " +  home + "💵 euroda " + home_euro + "💶 so'mda " + home_som + "💶-💵 <br> ")
document.write("Muzey va ko'ngilochar joylar uchun " +  muzey + " 💵 euroda " + muzey_euro + "💶 so'mda " + muzey_som + "💶-💵 <br> ")

const kerak_som = (som * 11000.34)
const yetmayapdi = kerak_som - kerak;

if (yetmayapdi <= 0) {
  document.write("Sizga sezilarli darajada pul yetmayapdi !!!")
  document.write("Biroz sabr qiling yoki registonga boring <br>" + name + " Agarda samalyotda shopir do'stingiz bo'lsa link tepada")
}

else {
  document.write("Sizni pulingiz bemalol dubayga borgani yetadi va sizga oq yo'l tilaymiz <br>")
}