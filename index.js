
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-wrapper";

  // div.list-row生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.closest(".list-wrapper");

    // TODO内容テキストを取得
    const text =
      addTarget.querySelector(".list-row").firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // 押された完了ボタンの祖先タグ（li）を未完了リストから削除し、完了リストへ移動
    deleteFromIncomplete(addTarget);

    // div.list-row生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // liタグの子要素に各要素を設定
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  })

  // button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {

    // 押された削除ボタンの祖先タグ（li）を未完了リストから削除
    deleteFromIncomplete(div.parentNode);
  })

  // liタグの子要素・孫要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
document.getElementById("incomplete-list").removeChild(target);
}
