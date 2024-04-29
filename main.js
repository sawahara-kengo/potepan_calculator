function clickButton(pressed) { //ボタン入力で発火
    /*log*/console.log(pressed);

    let displayBox = document.getElementById("display"); //ディスプレイの箱を取得
    /*log*/console.log(displayBox);
    
    if (pressed.value == "AC") { // AC入力時
        /*log*/console.log(pressed.value);
        displayBox.value = "0";
        /*log*/console.log(displayBox.value);
    } else if (pressed.value == "=") { // =入力時
        /*log*/console.log(pressed.value);
        displayBox.value = eval(displayBox.value);
        /*log*/console.log(displayBox.value);
    } else if (displayBox.value == "0") { // ディスプレイ表示が0のとき
        /*log*/console.log(displayBox.value);
        if (!isNaN(pressed.value)) { //ディスプレイ0表示で数値(!Not a Number)入力時
            /*log*/console.log(pressed.value);
            displayBox.value = pressed.value; //0表示を入力された数値に置き換える
            /*log*/console.log(displayBox.value);
        } else {
            if (pressed.value == "."){ // ディスプレイ0表示で.入力時
                /*log*/console.log(pressed.value);
                displayBox.value = 0 + pressed.value;
                /*log*/console.log(displayBox.value);
            }
        }
    } else { //「AC」「=」「0」以外の入力時かつディスプレイ表示が0でないとき
        if (isNaN(pressed.value)) { //NaN(非数)入力時
            let displayBoxValueString = displayBox.value.slice(-1); //表示内容の右端を変数定義
            
            if (!isNaN(displayBoxValueString)){ //表示内容の右端が!NaN(数値)の場合
                /*log*/console.log(displayBoxValueString);
                displayBox.value += pressed.value; //表示が0でなく、右端が数値の場合は非数を表示に追加する
                /*log*/console.log(displayBox.value);
            }
        } else if (pressed.value == ".") { //表示が0でない場合の.入力時
            /*「0.00.00」のような入力(1)、「0.1」+「0.2」=「0.300~004」のような計算ずれ(2)を防ぎたかったのですが、
                いくら調べても、それらを落とし込んで実装する手段に辿り着けませんでした。。
                　┗ ▼おそらくこれらを使わなければならないのであろうと判断した参考サイト▼
                    1)https://qiita.com/rikimaru914/items/61154567fa02f1d7a156
                    2)https://neightbor.jp/blog/javascript-calculation-error
                    
                    他にも調べましたが、私の頭で理解できた(できそう)なのは上記のサイトでした・・・。
                    
                    displayBox.valueにおいて2つ目以降の"."は受け付けないとすると「0.1+0.1」などが出来ないよなと悩み解決に至らず。。
                    べき乗するにしても小数点の処理をするにしても、演算子を区切りにして数値を取得させてやるんだろうなとは予想がつくのですが。。
                    　┗ 小数点についてはディスプレイ表示とは別にもう一つ検証用に変数を定義して、
                        演算子が入力されたら値をリセットするようにした上で"."は一つだけとすればできるのかもと予想までは行きましたが、
                        べき乗をするべき数値を取得する方法がさっぱりです。。ex)「1 + 0.3 * 6 + 4 - 0.23 + 1 + 0.3」のように入り得る場所がバラバラなので。。*/
                    
        } else { //数値入力時、表示が0でないとき
            displayBox.value += pressed.value;
            /*log*/console.log(displayBox.value);
        } 
    }
}