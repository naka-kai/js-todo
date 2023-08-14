
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div.list-row生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // liタグの子要素・孫要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
