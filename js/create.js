//画面幅・高さ
var row = 6;
var column = 5;
//var width = 48;
//var height = 48;
const width = 64;
const height = 64;
var canvasWidth = 720;
var canvasHeight = 540;
var regX = 24;
var regY = 24;
//画面余白
var leftWidth = (canvasWidth - (column * width)) / 2;
var upHeight = (canvasHeight - (row * height)) / 2;
var timer = NaN;
var stage = new createjs.Stage("myCanvas");
// マウスオーバーを有効にする
stage.enableMouseOver();
var ctx = document.getElementById("myCanvas").getContext("2d");
var file = 'image/Actor1.png';
var file2 = 'image/Actor2.png';
var file3 = 'image/Nature.png';
var file4 = 'image/EDGE13.png';
const hu1p = 'image/hu1p02.png';
const hu2p = 'image/hu2pTest2.png';
const gin1p = 'image/gin1pTest2.png';
const gin2p = 'image/gin2pTest2.png';
const kin1p = 'image/kin1pTest2.png';
const kin2p = 'image/kin2pTest2.png';
const gyoku1p = 'image/gyoku1pTest2.png';
const gyoku2p = 'image/gyoku2pTest2.png';
const frame_width = 64;
const frame_height = 64;
//現在のターン
var playturn = 1;
//フラグ
var attackFlag = false;
//カウント
var changeCount = 0;
var countX_1p = 0;
var countY_1p = 0;
var countX_2p = 0;
var countY_2p = 0;
//駒のオブジェクトと名前の配列
var hu_1p = [];
var hu_name_1p = [];
var hu_2p = [];
var kyo_1p = [];
var kyo_name_1p = [];
var kyo_2p = [];
var kyo_name_2p = [];
//フィールドの配列
var cell = [];
var fieldUnit = [];
var waitUnit_1p = [];
var waitUnit_2p = [];
var waitKind_1p = [];
var waitKind_2p = [];
var unitName;

//選択ユニット
var cUnit;
var insertUnit;
//盤面
var shapeMap;
//盤面コンテナ
var MapShape = new createjs.Container();
//移動マス画像
var shape;
//移動マス画像コンテナ
var container = new createjs.Container();
//プレイヤーカラー
var colorShape = new createjs.Container();
//駒データ
var huDate_1p = {
    images: [hu1p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 37
        run: 1,
        run2: 10
    },
};
//var huDate_1p = {
//    images: [hu1p],
//    frames: {
//        width: frame_width,
//        height: frame_height,
//    },
//    animations: {
//        // start, end, next, frequency
//        run: {
//            frames: [0, 0, 1, 1, 1],
//            speed: 0.2
//        },
//        //        run: [0,2,"run",1],
//        //        run2: [9,11,"run2",1]
//        run2: {
//            frames: [9, 9, 10, 10, 10],
//            speed: 0.2
//        },
//        stop:1
//    }
//}

var huDate_2p = {
    images: [hu2p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        run: 0,
        run2: 1
    },
};
var kyoDate_1p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 43
        run: 4
    },
};
var kyoDate_2p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 10
        run: 4
    },
};
var keiDate_1p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 85
        run: 2
    },
};
var keiDate_2p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 52
        run: 2
    },
};
var ginDate_1p = {
    images: [gin1p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 91
        run: 0,
        run2: 2
    },
};
var ginDate_2p = {
    images: [gin2p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 58
        run: 0,
        run2: 1
    },
};
var kinDate_1p = {
    images: [kin1p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 37
        run: 1
    },
};
var kinDate_2p = {
    images: [kin2p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 4
        run: 1
    },
};
var gyokuDate_1p = {
    images: [gyoku1p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 85
        run: 1
    },
};
var gyokuDate_2p = {
    images: [gyoku2p],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 52
        run: 2
    },
};
var syaDate_1p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 37
        run: 12
    },
};
var syaDate_2p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 10
        run: 12
    },
};
var kakuDate_1p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 40
        run: 13
    },
};
var kakuDate_2p = {
    images: [file],
    frames: {
        width: frame_width,
        height: frame_height,
    },
    animations: {
        // start, end, next, frequency
        //        run: 7
        run: 13
    },
};

var hu_SpriteSheet_1p = new createjs.SpriteSheet(huDate_1p);
var hu_SpriteSheet_2p = new createjs.SpriteSheet(huDate_2p);
var kyo_SpriteSheet_1p = new createjs.SpriteSheet(kyoDate_1p);
var kyo_SpriteSheet_2p = new createjs.SpriteSheet(kyoDate_2p);
var kei_SpriteSheet_1p = new createjs.SpriteSheet(keiDate_1p);
var kei_SpriteSheet_2p = new createjs.SpriteSheet(keiDate_2p);
var gin_SpriteSheet_1p = new createjs.SpriteSheet(ginDate_1p);
var gin_SpriteSheet_2p = new createjs.SpriteSheet(ginDate_2p);
var kin_SpriteSheet_1p = new createjs.SpriteSheet(kinDate_1p);
var kin_SpriteSheet_2p = new createjs.SpriteSheet(kinDate_2p);
var gyoku_SpriteSheet_1p = new createjs.SpriteSheet(gyokuDate_1p);
var gyoku_SpriteSheet_2p = new createjs.SpriteSheet(gyokuDate_2p);
var sya_SpriteSheet_1p = new createjs.SpriteSheet(syaDate_1p);
var sya_SpriteSheet_2p = new createjs.SpriteSheet(syaDate_2p);
var kaku_SpriteSheet_1p = new createjs.SpriteSheet(kakuDate_1p);
var kaku_SpriteSheet_2p = new createjs.SpriteSheet(kakuDate_2p);

function title() {
    //タイトル
    var title = new createjs.Text("五六将棋", "48px serif", "DarkRed");
    var titleFontSize = 48;
    var titleChar = 4;
    //title.textAlign = "center";
    title.textBaseline = "middle";
    //title.y = (canvasHeight - titleFontSize) / 2;
    title.y = 120;
    title.x = (canvasWidth - (titleFontSize * titleChar)) / 2;
    stage.addChild(title);
    //メニュー画面
    var menu = new createjs.Shape();
    menu.graphics.beginStroke("#000"); // 赤色で描画するように設定
    menu.graphics.setStrokeStyle(1);
    menu.graphics.drawRect(0, 0, 240, 120); // 長方形を描画
    var menuX = 240;
    var menuY = 120;
    //    menu.y = (canvasHeight - menuY) / 2;
    menu.y = 300;
    menu.x = (canvasWidth - menuX) / 2;
    stage.addChild(menu); // 表示リストに追加
    //メニューテキスト
    var text = new createjs.Text("対局開始", "28px serif", "DarkRed");
    var textSize = 28;
    var textChar = 4;
    var tPadding = 10;
    text.x = (menuX - (textSize * textChar)) / 2 + menu.x;
    text.y = (menuY - (textSize)) / 2 + menu.y;
    text.cursor = "pointer";
    text.addEventListener("click", handleClick);
    stage.addChild(text); // 表示リストに追加
    stage.update();
}

function handleClick(event) {
    stage.removeAllChildren();
    stage.update();
    init();
}

function initGame() {
    //空0
    //1P歩1,銀2,金3,王4,と金5
    //2P歩6,銀7,金8,王9,と金10
    var map = []
}

function init() {
    for (var i = 0; i < row; i++) {
        cell[i] = [];
        //        waitUnit_1p[i] = [];
        //        waitUnit_2p[i] = [];
        //        waitKind_1p[i] = [];
        //        waitKind_2p[i] = [];
        for (var j = 0; j < column; j++) {
            var unit = {
                name: "hoge",
                turn: "hoge",
                kind: "hoge",
                kind2: "hoge"
            }
            //            var waitUnit = {
            //                name: "hoge",
            //                turn: "hoge",
            //                kind: "hoge"
            //            }
            //            var waitUnit2 = {
            //                kind: "hoge",
            //                kind2: "hoge"
            //            }
            cell[i][j] = unit;
            //            waitUnit_1p[i][j] = waitUnit;
            //            waitUnit_2p[i][j] = waitUnit;
            //            waitKind_1p[i][j] = waitUnit2;
            //            waitKind_2p[i][j] = waitUnit2;
        }
    }
    //歩1P
    var hu0_1p = new createjs.Sprite(hu_SpriteSheet_1p, "run");
    var hu1_1p = new createjs.Sprite(hu_SpriteSheet_1p, "run");
    var hu2_1p = new createjs.Sprite(hu_SpriteSheet_1p, "run");
    hu_1p = [hu0_1p, hu1_1p, hu2_1p];
    hu_name_1p = ["hu0_1p", "hu1_1p", "hu2_1p"];
    for (var i = 0; i < hu_1p.length; i++) {
        unitStatus(hu_1p[i], hu_name_1p[i], (i * width) + leftWidth + width, upHeight + (height * 3), "hu");
    }
    playturn = 2;
    //歩2P
    var hu0_2p = new createjs.Sprite(hu_SpriteSheet_2p, "run");
    var hu1_2p = new createjs.Sprite(hu_SpriteSheet_2p, "run");
    var hu2_2p = new createjs.Sprite(hu_SpriteSheet_2p, "run");
    hu_2p = [hu0_2p, hu1_2p, hu2_2p];
    hu_name_2p = ["hu0_2p", "hu1_2p", "hu2_2p"];
    for (var i = 0; i < hu_2p.length; i++) {
        //歩配置2P
        unitStatus(hu_2p[i], hu_name_2p[i], (i * width) + leftWidth + width, upHeight + (height * 2), "hu");
    }
    playturn = 1;
    //    //香車1P
    //    var kyo0_1p = new createjs.Sprite(kyo_SpriteSheet_1p, "run");
    //    var kyo1_1p = new createjs.Sprite(kyo_SpriteSheet_1p, "run");
    //    unitStatus(kyo0_1p, "kyo0_1p", leftWidth, height * row, "kyo");
    //    unitStatus(kyo1_1p, "kyo1_1p", leftWidth + width * 8, height * row, "kyo");
    //    //桂馬1P
    //    var kei0_1p = new createjs.Sprite(kei_SpriteSheet_1p, "run");
    //    var kei1_1p = new createjs.Sprite(kei_SpriteSheet_1p, "run");
    //    kei_1p = [kei0_1p, kei1_1p];
    //    unitStatus(kei0_1p, "kei0_1p", leftWidth + width, height * row, "gin");
    //    unitStatus(kei1_1p, "kei1_1p", leftWidth + (width * column - (width * 2)), height * row, "kei");
    //銀1P
    var gin0_1p = new createjs.Sprite(gin_SpriteSheet_1p, "run");
    var gin1_1p = new createjs.Sprite(gin_SpriteSheet_1p, "run");
    unitStatus(gin0_1p, "gin0_1p", leftWidth, upHeight + (height * row) - height, "gin");
    unitStatus(gin1_1p, "gin1_1p", leftWidth + (width * 4), upHeight + (height * row) - height, "gin");
    //金1P
    var kin0_1p = new createjs.Sprite(kin_SpriteSheet_1p, "run");
    var kin1_1p = new createjs.Sprite(kin_SpriteSheet_1p, "run");
    unitStatus(kin0_1p, "kin0_1p", leftWidth + width, upHeight + (height * row) - height, "kin");
    unitStatus(kin1_1p, "kin1_1p", leftWidth + width * 3, upHeight + (height * row) - height, "kin");
    //王1P
    var gyoku0_1p = new createjs.Sprite(gyoku_SpriteSheet_1p, "run");
    unitStatus(gyoku0_1p, "gyoku0_1p", leftWidth + width * 2, upHeight + (height * row) - height, "gyoku");
    //    //飛車1P
    //    var sya0_1p = new createjs.Sprite(sya_SpriteSheet_1p, "run");
    //    unitStatus(sya0_1p, "sya0_1p", leftWidth + width * 7, height * row - height, "sya");
    //    //角1P
    //    var kaku0_1p = new createjs.Sprite(kaku_SpriteSheet_1p, "run");
    //    unitStatus(kaku0_1p, "kaku0_1p", leftWidth + width, height * row - height, "kaku");
    //切り替え
    playturn = 2;
    //    //香車2P
    //    var kyo0_2p = new createjs.Sprite(kyo_SpriteSheet_2p, "run");
    //    var kyo1_2p = new createjs.Sprite(kyo_SpriteSheet_2p, "run");
    //    unitStatus(kyo0_2p, "kyo0_2p", leftWidth, height, "kyo");
    //    unitStatus(kyo1_2p, "kyo1_2p", leftWidth + (width * column) - width, height, "kyo");
    //
    //    //桂馬2P
    //    var kei0_2p = new createjs.Sprite(kei_SpriteSheet_2p, "run");
    //    var kei1_2p = new createjs.Sprite(kei_SpriteSheet_2p, "run");
    //    unitStatus(kei0_2p, "kei0_2p", leftWidth + width, height, "gin", 2);
    //    unitStatus(kei1_2p, "kei1_2p", leftWidth + (width * column) - (width * 2), height, "kei");

    //銀2P
    var gin0_2p = new createjs.Sprite(gin_SpriteSheet_2p, "run");
    var gin1_2p = new createjs.Sprite(gin_SpriteSheet_2p, "run");
    unitStatus(gin0_2p, "gin0_2p", leftWidth, upHeight, "gin", 2);
    unitStatus(gin1_2p, "gin1_2p", leftWidth + (width * 4), upHeight, "gin");

    //金2P
    var kin0_2p = new createjs.Sprite(kin_SpriteSheet_2p, "run");
    var kin1_2p = new createjs.Sprite(kin_SpriteSheet_2p, "run");
    unitStatus(kin0_2p, "kin0_2p", leftWidth + width, upHeight, "kin", 2);
    unitStatus(kin1_2p, "kin1_2p", leftWidth + (width * 3), upHeight, "kin");

    //王2P
    var gyoku0_2p = new createjs.Sprite(gyoku_SpriteSheet_2p, "run");
    unitStatus(gyoku0_2p, "gyoku0_2p", leftWidth + width * 2, upHeight, "gyoku");

    //    //飛車2P
    //    var sya0_2p = new createjs.Sprite(sya_SpriteSheet_2p, "run");
    //    unitStatus(sya0_2p, "sya0_2p", leftWidth + width, height * 2, "sya");
    //
    //    //角2P
    //    var kaku0_2p = new createjs.Sprite(kaku_SpriteSheet_2p, "run");
    //    unitStatus(kaku0_2p, "kaku0_2p", leftWidth + width * 7, height * 2, "kaku");
    playturn = 1;
    repaint();
    unitFill();
    stage.update();
 //   createjs.Ticker.addEventListener("tick", animate);
//    timer = setInterval(tick, 45);
}

function animate(eventObject) {
  stage.update();
}

function unitStatus(unit, unitName, width2, height2, kind) {
    unit.x = width2;
    unit.y = height2;
    //    unit.scaleX=1.5;
    //    unit.scaleY=1.5;
    unitSet(unit, `${unitName}`, `${kind}`, `${kind}`);
}

function unitSet(unit, unitName, kind, kind2) {
    unit.addEventListener("click", unitChoose);
    stage.addChild(unit);
    var changeX = xToIndex(unit.x);
    var changeY = yToIndex(unit.y);
    cell[changeY][changeX].name = unitName;
    cell[changeY][changeX].turn = playturn;
    cell[changeY][changeX].kind = kind;
    cell[changeY][changeX].kind2 = kind2;
    unit.name = unitName;
    unit.gotoAndPlay("run");
    fieldUnit.push(unit);
}

function xToIndex(x) {
    return (x - leftWidth) / width;
}

function yToIndex(y) {
    return (y - upHeight) / height;
}

//function tick() {
//    repaint();
//}

function repaint() {
    for (var j = 0; j < row; j++) {
        for (var k = 0; k < column; k++) {
//            ctx.lineWidth = 0.5;
//            ctx.strokeRect(leftWidth + (width * k), upHeight + (height * j), width, height);
            shapeMap = new createjs.Shape();
            shapeMap.graphics.beginStroke("#000");
            var dx = leftWidth + (k * width);
            var dy = upHeight + (j * height);
            shapeMap.graphics.drawRect(dx, dy, width, height);
            MapShape.addChild(shapeMap);
        }
    }
    stage.addChild(MapShape);
}

function moveOne(indexY, indexX, y, x, unitY, unitX, heightY, widthX) {
    var cy = indexY + y;
    var cx = indexX + x;
    var py = unitY + heightY;
    var px = unitX + widthX;
    if (cy < 0 || row <= cy || cell[cy][cx].turn == playturn) {
        return false;
    } else {
        cellFill(py, px);
    }
}

function moveStraight(indexY, indexX, y, x, unitY, unitX, heightY, widthX) {
    var cy = indexY + y;
    var cx = indexX + x;
    var py = unitY + heightY;
    var px = unitX + widthX;
    if (cy < 0 || row <= cy) {
        return false;
    } else {
        while (cell[cy][cx].kind == "hoge") {
            cellFill(py, px, cy, cx);
            cy = cy + y;
            cx = cx + x;
            py = py + heightY;
            if (cy < 0 || row <= cy) {
                break;
            }
        }
        if (cell[cy][cx].turn == 3 - playturn) {
            cellFill(py, px);
        }
    }
}

function moveKei(indexY, indexX, unitY, unitX) {
    var leftX = unitX - width;
    var rightX = unitX + width;
    var heightY = (playturn == 1) ? unitY - (height * 2) : unitY + (height * 2) - regY;
    var y = (playturn == 1) ? -2 : +2;
    var cy = indexY + y;
    var rx = indexX + 1;
    var lx = indexX - 1;
    if (cy < 0 || cy > 8) {
        return false;
    } else {
        if (lx < 0 && cell[cy][rx].turn != playturn) {
            cellFill(heightY, rightX);
        } else if (rx > 8 && cell[cy][lx].turn != playturn) {
            cellFill(heightY, leftX);
        } else {
            if (cell[cy][rx].turn == playturn && cell[cy][lx].turn == playturn) {
                return false;
            } else if (cell[cy][rx].turn == playturn) {
                cellFill(heightY, leftX);
            } else if (cell[cy][lx].turn == playturn) {
                cellFill(heightY, rightX);
            } else {
                cellFill(heightY, leftX);
                cellFill(heightY, rightX);
            }
        }
    }
}

function moveGin(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if (playturn == 1) {
                if ((dy == 0 && dx == 0) || (dy == 0 && dx == -1) || (dy == 0 && dx == 1) || (dy == 1 && dx == 0)) {
                    continue;
                } else {
                    moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
                }
            } else {
                if ((dy == -1 && dx == 0) || (dy == 0 && dx == 0) || (dy == 0 && dx == -1) || (dy == 0 && dx == 1)) {
                    continue;
                } else {
                    moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
                }
            }
        }
    }
}

function dyToHeight(dy) {
    var heightY;
    switch (dy) {
        case -1:
            heightY = -height;
            break;
        case 0:
            heightY = 0;
            break;
        case 1:
            heightY = height;
            break;
    }
    return heightY;
}

function dxToWidth(dx) {
    var widthX;
    switch (dx) {
        case -1:
            widthX = -width;
            break;
        case 0:
            widthX = 0;
            break;
        case 1:
            widthX = width;
            break;
    }
    return widthX;
}

function moveKin(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if (playturn == 1) {
                if ((dy == 0 && dx == 0) || (dy == 1 && dx == -1) || (dy == 1 && dx == -1) || (dy == 1 && dx == 1)) {
                    continue;
                } else {
                    moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
                }
            } else {
                if ((dy == -1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 0 && dx == 0)) {
                    continue;
                } else {
                    moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
                }
            }
        }
    }
}

function moveGyoku(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
        }
    }
}

function moveSya(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if ((dy == -1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 0 && dx == 0) || (dy == 1 && dx == -1) || (dy == 1 && dx == 1)) {
                continue;
            } else {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 2);
            }
        }
    }
}

function moveSya2(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if (dy == 0 && dx == 0) {
                continue;
            } else if ((dy == -1 && dx == -1) || (dy == -1 && dx == 1) || (dy == 1 && dx == -1) || (dy == 1 && dx == 1)) {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
            } else {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 2);
            }
        }
    }
}

function moveKaku(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if ((dy == -1 && dx == 0) || (dy == 0 && dx == -1) || (dy == 0 && dx == 0) || (dy == 0 && dx == 1) || (dy == 1 && dx == 0)) {
                continue;
            } else {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 2);
            }
        }
    }
}

function moveKaku2(indexY, indexX, unitY, unitX) {
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            var heightY = dyToHeight(dy);
            var widthX = dxToWidth(dx);
            if (dy == 0 && dx == 0) {
                continue;
            } else if ((dy == -1 && dx == 0) || (dy == 0 && dx == -1) || (dy == 0 && dx == 1) || (dy == 1 && dx == 0)) {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 1);
            } else {
                moveAround(indexY, indexX, dy, dx, unitY, unitX, heightY, widthX, 2);
            }
        }
    }
}

function moveAround(indexY, indexX, y, x, unitY, unitX, heightY, widthX, move) {
    var cy = indexY + y;
    var cx = indexX + x;
    var py = unitY + heightY;
    var px = unitX + widthX;
    if (cy < 0 || row <= cy || cx < 0 || column <= cx) {
        return false;
    } else {
        if (move == 1) {
            if (cell[cy][cx].turn != playturn) {
                cellFill(py, px);
            }
        } else {
            while (cell[cy][cx].turn != playturn) {
                cellFill(py, px);
                if (cell[cy][cx].turn == 3 - playturn) {
                    return false;
                }
                cy = cy + y;
                cx = cx + x;
                py = py + heightY;
                px = px + widthX;
                if (cy < 0 || row <= cy || cx < 0 || column <= cx) {
                    return false;
                }

            }
        }
    }
}

function cellFill(y, x) {
    var xTurn = (playturn == 1) ? 2 : 1;
    shape = new createjs.Shape();
    shape.alpha = 0.5;
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawRect(0, 0, width, height);
    shape.addEventListener("click", moveUnit);
    shape.x = x;
    shape.y = y;
    container.addChild(shape);
    changeCount++;
    // 表示リストに追加
    stage.update();
}

function unitFill() {
    if (colorShape.getChildIndex != -1) {
        colorShape.removeAllChildren();
    }
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            shape = new createjs.Shape();
            shape.alpha = 0.2;
            if (cell[i][j].turn == 1) {
                shape.graphics.beginFill("#ff8c00");
            } else if (cell[i][j].turn == 2) {
                shape.graphics.beginFill("#1e90ff");
            } else {

            }
            var dx = leftWidth + (j * width);
            var dy = upHeight + (i * height);
            shape.graphics.drawRect(dx, dy, width, height);
            colorShape.addChild(shape);
        }
    }
    stage.addChild(colorShape);
}

function unitChoose(event) {
    var judgeUnit = event.target;
    var judgeUnitY = yToIndex(judgeUnit.y);
    var judgeUnitX = xToIndex(judgeUnit.x);
    var result;
    if (cell[judgeUnitY][judgeUnitX].turn == playturn) {
        //選択パネル初期化
        //        if (changeCount > 0) {
        //            //        if (container.getChildIndex != -1) {
        //            container.removeAllChildren();
        //        }
        if (container.getChildIndex != -1) {
            container.removeAllChildren();
        }
        //コンテナ作成
        //container = new createjs.Container();
        //ユニット格納
        cUnit = event.target;
        //自分がいるセルの番号
        var unitY = yToIndex(cUnit.y);
        var unitX = xToIndex(cUnit.x);
        //セル番号の増減
        var y = (playturn == 1) ? -1 : 1;
        var heightY = (playturn == 1) ? -height : height;
        container = new createjs.Container();
        container.x = 0;
        container.y = 0;
        stage.addChild(container);
        switch (cell[judgeUnitY][judgeUnitX].kind) {
            case "hu":
                result = moveOne(unitY, unitX, y, 0, cUnit.y, cUnit.x, heightY, 0);
                break;
            case "kyo":
                result = moveStraight(unitY, unitX, y, 0, cUnit.y, cUnit.x, heightY, 0);
                break;
            case "kei":
                result = moveKei(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "gin":
                result = moveGin(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "kin":
                result = moveKin(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "gyoku":
                result = moveGyoku(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "sya":
                result = moveSya(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "kaku":
                result = moveKaku(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "sya2":
                result = moveSya2(unitY, unitX, cUnit.y, cUnit.x);
                break;
            case "kaku2":
                result = moveKaku2(unitY, unitX, cUnit.y, cUnit.x);
                break;
        }
    }
}

function selectChange(unitY, unitX, unit) {
    var result = confirm("成りますか？");
    if (result == true) {
        switch (cell[unitY][unitX].kind) {
            case "hu":
                unit.gotoAndStop('run');
                unit.gotoAndPlay('run2');
                cell[unitY][unitX].kind = "kin";
                break;
            case "kyo":
                cell[unitY][unitX].kind = "kin";
                break;
            case "kei":
                cell[unitY][unitX].kind = "kin";
                break;
            case "gin":
                unit.gotoAndStop('run');
                unit.gotoAndPlay('run2');
                cell[unitY][unitX].kind = "kin";
                break;
            case "sya":
                cell[unitY][unitX].kind = "sya2";
                break;
            case "kaku":
                cell[unitY][unitX].kind = "kaku2";
                break;
        }
    }
}

function canChange(moveY, unitY, unitX) {
    if (moveY <= 1 && playturn == 1 || moveY >= 4 && playturn == 2) {
        if (cell[unitY][unitX].kind != "kin" && cell[unitY][unitX].kind != "gyoku") {
            return true;
        }
    }
}

function moveUnit(event) {
    var xTurn = (playturn == 1) ? 2 : 1;
    var countX = (playturn == 1) ? countX_1p : countX_2p;
    var countY = (playturn == 1) ? countY_1p : countY_2p;
    var waitUnitX = (playturn == 1) ? waitUnit_1p : waitUnit_2p;
    var waitKindX = (playturn == 1) ? waitKind_1p : waitKind_2p;
    //    var waitX = (playturn == 1) ? leftWidth + (row * width) + (countX_1p * width) : countX_2p * width;
    var waitX = (playturn == 1) ? (canvasWidth - width) - (countX_1p * width) : countX_2p * width;
    var waitY = (playturn == 1) ? canvasHeight - ((countY_1p * height) + height) : countY_2p * height;
    var instance = event.target;
    //移動ユニットのセル番号
    var unitY = yToIndex(cUnit.y);
    //    (cUnit.y - height) / height;
    //    var unitX = (cUnit.x - leftWidth) / height;
    var unitX = xToIndex(cUnit.x);
    //移動先セルの番号
    var moveY = yToIndex(instance.y);
    var moveX = xToIndex(instance.x);
    //ユニットを移動
    cUnit.x = instance.x;
    cUnit.y = instance.y;
    //成るかどうか
    var change = canChange(moveY, unitY, unitX);
    if (change == true) {
        selectChange(unitY, unitX, cUnit);
    }
    if (cell[moveY][moveX].turn == xTurn) {
        attackFlag = true;
    }
    if (attackFlag == true) {
        var name = cell[moveY][moveX].name;
        var targetUnit = fieldUnit.find((v) => v.name === name);
        targetUnit.stop();
        targetUnit.gotoAndPlay('run');
        targetUnit.name = name;
        targetUnit.removeEventListener("click", unitChoose);
        targetUnit.addEventListener("click", insertSelect);
        targetUnit.kind = cell[moveY][moveX].kind2;
        targetUnit.kind2 = cell[moveY][moveX].kind2;
        waitUnitX.push(targetUnit);
        attackFlag = false;
        for (var i = 0; i < waitUnitX.length; i++) {
            var waitUnit = waitUnitX[i];
            if (playturn == 1) {
                waitUnit.x = (canvasWidth - width) - (i * width);
                waitUnit.y = canvasHeight - height;
            } else {
                waitUnit.x = (i * width);
                waitUnit.y = 0;
            }

        }
    }
    //移動先のセルに移動元のユニット情報をコピー
    cell[moveY][moveX].kind = cell[unitY][unitX].kind;
    cell[moveY][moveX].kind2 = cell[unitY][unitX].kind2;
    cell[moveY][moveX].turn = cell[unitY][unitX].turn;
    cell[moveY][moveX].name = cell[unitY][unitX].name;
    //移動元のセル情報をリセットする
    cell[unitY][unitX].kind = "hoge";
    cell[unitY][unitX].kind2 = "hoge";
    cell[unitY][unitX].turn = "hoge";
    cell[unitY][unitX].name = "hoge";
    //選択パネルを消す
    changeCount = 0;
    turnEnd();
}

function insertSelect(event) {
    if ((event.target.y == 0 && playturn == 2) || (event.target.y > upHeight && playturn == 1)) {
        container.removeAllChildren();
        insertUnit = event.target;
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                if (cell[i][j].turn == "hoge") {
                    insertShape = new createjs.Shape();
                    insertShape.alpha = 0.5;
                    insertShape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
                    insertShape.graphics.drawRect(0, 0, width, height);
                    insertShape.addEventListener("click", insert);
                    insertShape.x = (j * width) + leftWidth;;
                    insertShape.y = (i * height) + upHeight;
                    changeCount++;
                    container.addChild(insertShape);
                }
            }
        }
        stage.update();
    }
}

function insert(event) {
    var xTurn = (playturn == 1) ? 2 : 1;
    var instance = event.target;
    var name = insertUnit.name;
    var waitUnitX = (playturn == 1) ? waitUnit_1p : waitUnit_2p;
    var waitKindX = (playturn == 1) ? waitKind_1p : waitKind_2p;
    var targetUnit = waitUnitX.find((v) => v.name === name);
    var number = waitUnitX.findIndex((v) => v.name === name);
    waitUnitX.splice(number, 1);
    targetUnit.x = instance.x;
    targetUnit.y = instance.y;
    targetUnit.turn = playturn;
    targetUnit.removeEventListener("click", insertSelect);
    targetUnit.addEventListener("click", unitChoose);
    targetUnit.stop();
    targetUnit.gotoAndPlay('run');
    var insertY = yToIndex(instance.y);
    var insertX = xToIndex(instance.x);
    cell[insertY][insertX].kind = targetUnit.kind;
    cell[insertY][insertX].kind2 = targetUnit.kind2;
    cell[insertY][insertX].turn = playturn;
    cell[insertY][insertX].name = targetUnit.name;
    //待機ユニット再表示
    for (var i = 0; i < waitUnitX.length; i++) {
        var waitUnit = waitUnitX[i];
        if (playturn == 1) {
            waitUnit.x = (canvasWidth - width) - (i * width);
            waitUnit.y = canvasHeight - height;
        } else {
            waitUnit.x = (i * width);
            waitUnit.y = 0;
        }
    }
    turnEnd();
}

function turnEnd() {
    var xTurn = (playturn == 1) ? 2 : 1;
    container.removeAllChildren();
    playturn = xTurn;
    unitFill();
    stage.update();
}
