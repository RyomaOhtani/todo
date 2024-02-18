function addTask() {
    // テキストボックスの値を取得
    var newTaskText = document.getElementById("new-task").value;

    if (newTaskText !== "") {
        // 新しいリストアイテムを作成
        var newTaskItem = document.createElement("li");
        newTaskItem.textContent = newTaskText;

        // リストに追加
        document.getElementById("todo-list").appendChild(newTaskItem);

        // テキストボックスをクリア
        document.getElementById("new-task").value = "";
    }
}

// タスクを追加する関数
function addTask() {
    var newTaskText = document.getElementById("new-task").value;

    if (newTaskText !== "") {
        var newTaskItem = document.createElement("li");
        newTaskItem.textContent = newTaskText;
        
        // チェックボックスを作成
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            // チェックがついたらTODOアイテムを削除
            if (checkbox.checked) {
                newTaskItem.remove();
            }
        });

        // アイテムにチェックボックスを追加
        newTaskItem.appendChild(checkbox);

        // リストに追加
        document.getElementById("todo-list").appendChild(newTaskItem);

        // テキストボックスをクリア
        document.getElementById("new-task").value = "";
    }
}