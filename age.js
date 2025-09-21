// 年齢を算出する関数
function age() {
  const ageElement = document.getElementById("age");
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const by = 2020;
  const bm = 9;
  const bd = 19;

  let ageText = "";

  if (month >= bm && day >= bd) {
    ageText = (year - by) + "歳" + (month - bm + 1) + "か月";
  }
  else if (month >= bm && day < bd) {
    ageText = (year - by) + "歳" + (month - bm ) + "か月";
  }
  else if (month < bm && day >= bd) {
    ageText = (year - by - 1) + "歳" + (month + 12 - bm) + "か月";
    /*ageText = now + "    " + year + " " + month + " " + day ;*/
  }
  else {
    ageText = (year - by - 1) + "歳" + (month + 11 - bm) + "か月";
  }

  ageElement.textContent = ageText;
}

// ページの読み込み完了後に実行
document.addEventListener("DOMContentLoaded", age);
