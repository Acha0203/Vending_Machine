class PictureObject {
	constructor(number, picTitle, artist, width, height, imgUrl1, imgUrl2){
		this.number = number; // Integer
		this.picTitle = picTitle; // String
		this.artist = artist; // String
		this.width = width; // Integer
		this.height = height; // Integer
		this.imgUrl1 = imgUrl1; // String: The url of a picture for the slider animation
		this.imgUrl2 = imgUrl2; // String: The url of a picture for downloading
	}

	//右側の画像情報部分のHTMLを返す
	getPictureInfoString() {
		let pictureInfoString = "";
		pictureInfoString +=
		`
		<div class="text-center flex-column">
			<h2 id="picture" class="picture-text font-times">${this.picTitle}</h2>
			<h2 id="artist" class="artist-text font-times">by ${this.artist}</h2>
			<h3 id="size" class="size-text font-times">${this.width} px * ${this.height} px</h3>
		</div>
		`;

		return pictureInfoString;
	}
}

const pictures = [
	new PictureObject(0, "Title of picture", "Artist", "width", "height", "images/start-image.png", "images/start-image.png"),
	new PictureObject(1, "The painter's conflict", "Carl Reichert", 1554, 1200, "images/Carl-Reichert-Der-Malerstreit-1903-s.jpg", "images/Carl-Reichert-Der-Malerstreit-1903.jpg"),
	new PictureObject(2, "Playful kittens", "Carl Reichert", 3106, 2491, "images/Carl-Reichert-Playful-kittens-s.jpg", "images/Carl-Reichert-Playful-kittens.jpg"),
	new PictureObject(3, "Curious dachshund puppies and a frog", "Carl Reichert", 3038, 1975, "images/Carl-Reichert-Curious-dachshund-puppies-and-a-frog-s.jpg", "images/Carl-Reichert-Curious-dachshund-puppies-and-a-frog.jpg"),
	new PictureObject(4, "Noch nicht hasenrein", "Carl Reichert", 2048, 3121, "images/Carl-Reichert-Noch-nicht-hasenrein-s.jpg", "images/Carl-Reichert-Noch-nicht-hasenrein.jpg"),
	new PictureObject(5, "Apes playing cards", "Abraham Teniers", 3000, 2271, "images/Abraham-Teniers-Kaartspelende-apen-s.jpg", "images/Abraham-Teniers-Kaartspelende-apen.jpg"),
	new PictureObject(6, "Barbershop with monkeys and cats", "Abraham Teniers", 1863, 1445, "images/Abraham-Teniers-Kapperszaak-met-apen-en-katten-s.jpg", "images/Abraham-Teniers-Kapperszaak-met-apen-en-katten.jpg"),
	new PictureObject(7, "Diogenes", "Jean-Léon Gérôme", 1800, 1322, "images/Jean-Leon-Gerome-Diogenes-Walters-37131-s.jpg", "images/Jean-Leon-Gerome-Diogenes-Walters-37131.jpg"),
	new PictureObject(8, "Dog at Rest", "Gerrit Dou", 956, 640, "images/Gerrit-Dou-Dutch,-1613–1675,-Sleeping-Dog,-1650.-Oil-on-panel-s.jpg", "images/Gerrit-Dou-Dutch,-1613–1675,-Sleeping-Dog,-1650.-Oil-on-panel.jpg"),
	new PictureObject(9, "Monkeys smoking and drinking", "David Teniers the Younger", 1905, 1284, "images/David-Teniers-II-Smoking-and-drinking-monkeys-s.jpg", "images/David-Teniers-II-Smoking-and-drinking-monkeys.jpg"),
	new PictureObject(10, "Guardroom scene with monkey soldiers", "David Teniers the Younger", 3200, 2309, "images/David-Teniers-II-Apenkortegaard-Lilian792011T114040-s.jpg", "images/David-Teniers-II-Apenkortegaard-Lilian792011T114040.jpg"),
	new PictureObject(11, "猫飼好五十三疋", "歌川国芳", 3829, 1901, "images/Cats-suggested-as-the-fifty-three-stations-of-the-Tokaido-s.jpg", "images/Cats-suggested-as-the-fifty-three-stations-of-the-Tokaido.jpg"),
	new PictureObject(12, "「白象黒牛図屏風」左隻", "長沢蘆雪", 1600, 718, "images/Hakuzo-kokugyu-zu-byobu-by-Nagasawa-Rosetsu-Part-of-the-bull-s.jpg", "images/Hakuzo-kokugyu-zu-byobu-by-Nagasawa-Rosetsu-Part-of-the-bull.jpg"),
	new PictureObject(13, "「群鶴図」左隻", "円山応挙", 2100, 962, "images/Cranes-LACMA-M.2011.106a-b-1-of-20-s.jpg", "images/Cranes-LACMA-M.2011.106a-b-1-of-20.jpg"),
	new PictureObject(14, "紫陽花双鶏図", "伊藤若冲", 1254, 2048, "images/Ito-Jakuchu-AjisaiSoukei-zu-s.jpg", "images/Ito-Jakuchu-AjisaiSoukei-zu.jpg"),
	new PictureObject(15, "『動植綵絵』の内「群魚図」", "伊藤若冲", 726, 1352, "images/'Fish'-from-the-'Colorful-Realm-of-Living-Beings'-by-Ito-Jakuchu-s.jpg", "images/'Fish'-from-the-'Colorful-Realm-of-Living-Beings'-by-Ito-Jakuchu.jpg"),
	new PictureObject(16, "『動植綵絵』の内「池辺群虫図」", "伊藤若冲", 1046, 1890, "images/'Pond-and-Insects'-from-the-'Colorful-Realm-of-Living-Beings'-by-Ito-Jakuchu-s.jpg", "images/'Pond-and-Insects'-from-the-'Colorful-Realm-of-Living-Beings'-by-Ito-Jakuchu.jpg"),
	new PictureObject(17, "蛙の放下師", "河鍋暁斎", 480, 1402, "images/'Frog-Acrobats'-by-Kawanabe-Kyosai-1871-1889-s.jpg", "images/'Frog-Acrobats'-by-Kawanabe-Kyosai-1871-1889.jpg"),
	new PictureObject(18, "The Butterfly", "John Henry Dolph", 625, 1095, "images/JH-Dolph-Butterfly-s.jpg", "images/JH-Dolph-Butterfly.jpg"),
	new PictureObject(19, "Courage is Half the Battle", "John Henry Dolph", 1110, 830, "images/JH-Dolph-Courage-s.jpg", "images/JH-Dolph-Courage.jpg"),
	new PictureObject(20, "The Requiescat", "Briton Rivière", 4994, 3481, "images/Briton-Riviere-Requiescat-Google-Art-Project-s.jpg", "images/Briton-Riviere-Requiescat-Google-Art-Project.jpg"),
	new PictureObject(21, "Compulsory Education", "Briton Rivière", 1450, 2048, "images/Briton_Riviere_Compulsory_Education-s.jpg", "images/Briton_Riviere_Compulsory_Education.jpg"),
	new PictureObject(22, "Horses at the Porch", "Albrecht Adam", 1476, 1208, "images/Horses-at-the-Porch-s.jpg", "images/Horses-at-the-Porch.jpg"),
	new PictureObject(23, "Nanny & Spot", "Charles Burton Barber", 1275, 1650, "images/Charles-Burton-Barber-Nanny-Spot-RCIN-403574-Royal-Collection-s.jpg", "images/Charles-Burton-Barber-Nanny-Spot-RCIN-403574-Royal-Collection.jpg"),
	new PictureObject(24, "A Family of Pugs", "Charles Burton Barber", 2000, 1400, "images/Charles-Burton-Barber-A-Family-of-Pugs-RCIN-403587-Royal-Collection-s.jpg", "images/Charles-Burton-Barber-A-Family-of-Pugs-RCIN-403587-Royal-Collection.jpg"),
	new PictureObject(25, "Cat and Dogs belonging to Queen Victoria", "Charles Burton Barber", 2000, 1321, "images/Charles-Burton-Barber-Cat-and-Dogs-belonging-to-Queen-Victoria-RCIN-403567-Royal-Collection-s.jpg", "images/Charles-Burton-Barber-Cat-and-Dogs-belonging-to-Queen-Victoria-RCIN-403567-Royal-Collection.jpg"),
	new PictureObject(26, "Snowball, Marco & Janey", "Charles Burton Barber", 2000, 1595, "images/Charles-Burton-Barber-Snowball,-Marco-Janey-RCIN-403573-Royal-Collection-s.jpg", "images/Charles-Burton-Barber-Snowball,-Marco-Janey-RCIN-403573-Royal-Collection.jpg"),
	new PictureObject(27, "Mother's Pride", "Henriëtte Ronner-Knip", 2000, 1441, "images/Henriette-Ronner-Knip-Mothers-Pride-s.jpg", "images/Henriette-Ronner-Knip-Mothers-Pride.jpg"),
	new PictureObject(28, "The Little Rascals", "Henriëtte Ronner-Knip", 2560, 1876, "images/2560px-Henriette-Ronner-Knip-The-Little-Rascals-812015T19523-s.jpg", "images/2560px-Henriette-Ronner-Knip-The-Little-Rascals-812015T19523.jpg")
];

// 入力された番号(String)
let imageNumber = "0";

// 左側の作成
let leftSection = 
`
<div id="left-box" class="col-12 col-md-6 my-3">
	<div id="display">
		<div id="slider-data" class="d-none">
`;

for (let i = 0; i < pictures.length; i++) {
	leftSection += 
	`
	<img src= ${pictures[i].imgUrl1} class="w-100 h-100 slider-item bg-dark">
	`
}

leftSection += 
`
		</div>
	</div>
</div>
`;

// 右側の作成
let rightSection = 
`
	<div id="right-box" class="col-12 col-md-6 bg-dark">
		<div id="number-display" class="number-display d-flex justify-content-start align-items-center px-3 my-3">
			<h2 id="img-number" class="img-number-text font-times">Number: ${imageNumber}</h2>
		</div>
		<div id="info-box" class="info-box bd-highlight d-flex justify-content-center align-items-center my-3">
`;
rightSection += pictures[0].getPictureInfoString(); // デフォルトの値
rightSection +=
`
		</div>
`;
rightSection += createTenKeyString();
rightSection += 
`
		<button id="btn-download" class="ten-key-btn font-times btn-highlight btn-gradient my-2 w-100">Download</button>
	</div>
`;

// 画面全体の作成
let htmlString = 
`
<div class="d-flex justify-content-center align-items-center">
	<h1 class="title-text font-times py-3">Images of Animals Vending Machine</h1>
</div>
<div id="outer-frame" class="outer-frame">
	${leftSection}
	${rightSection}
</div>
`;

document.getElementById("target").innerHTML = htmlString;
addListenerToTenKey(0, 9); // 0から9までの数字ボタンにEvent Listenerを追加

const display = document.getElementById("display");

const sliderItems = document.querySelectorAll("#target .slider-item");

// Slider
let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("w-100", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
display.append(sliderShow);

main.setAttribute("data-index", "0");

// 数値numberを受け取ってアニメーションの方向animationTypeと次の要素nextElementを決定しanimateMain()関数に渡す
function slideJump(number) {
	// 画像の総数の半分の大きさ
	const halfOfElements = Math.floor(sliderItems.length / 2);
	let target = number;
	let index = parseInt(main.getAttribute("data-index"));
	let currentElement = sliderItems.item(index);
	let animationType = "none"; // 現在の要素と次の要素が同じなら何もしない

	// アニメーションの方向を判定
	if (target > index) {
		if (target - index <= halfOfElements) animationType = "right";
		else animationType = "left";
	} else if (target < index) {
		if (index - target <= halfOfElements) animationType = "left";
		else animationType = "right";
	}

	let nextElement = sliderItems.item(target);

	main.setAttribute("data-index", target.toString());

	animateMain(currentElement, nextElement, animationType);
}

function animateMain(currentElement, nextElement, animationType) {
	extra.innerHTML = "";
	extra.append(currentElement);

	main.innerHTML = "";
	main.append(nextElement);

	main.classList.add("expand-animation");
	extra.classList.add("deplete-animation");

	if (animationType === "right") {
		sliderShow.innerHTML = "";
		sliderShow.append(extra);
		sliderShow.append(main);
	} else if (animationType === "left"){
		sliderShow.innerHTML = "";
		sliderShow.append(main);
		sliderShow.append(extra);
	}
}

// 数字ボタンを作成
function createTenKeyString() {
	let tenKeyString =
	`
	<div id="key-box" class="p-3 my-3 bd-highlight d-flex justify-content-center flex-wrap">
		<div id="ten-key-top" class="d-flex justify-content-center flex-wrap">
	`;

	for (let i = 0; i <= 9; i++) {
		tenKeyString +=
		`
		<button id="btn-${i}" class="ten-key-btn font-times btn-highlight btn-gradient m-2 w-2em">${i}</button>
		`;
	}

	tenKeyString +=
	`
			<button id="btn-del" class="ten-key-btn font-times btn-highlight btn-gradient m-2 w-2em">del</button>
			<button id="btn-ac" class="ten-key-btn font-times btn-highlight btn-gradient m-2 w-2em">AC</button>
		</div>
		<div id="ten-key-bottom" class="d-flex justify-content-center align-items-center">
			<button id="btn-show" class="ten-key-btn font-times btn-highlight btn-gradient m-2 px-5">Show</button>
		</div>
	</div>
	`;

	return tenKeyString;

}

// startからendまでの数字ボタン、del、AC、ShowボタンにEvent Listenerを追加
function addListenerToTenKey(start, end) {
	for (let i = start; i <= end; i++) {
		let buttonId = "btn-" + i.toString();
		let tenKey = document.getElementById(buttonId);

		tenKey.addEventListener("click", function() {
			changeImageNumber(i);
		});
	}

	let otherKey = document.getElementById("btn-del");

	otherKey.addEventListener("click", function() {
		deleteImageNumber();
	});

	otherKey = document.getElementById("btn-ac");

	otherKey.addEventListener("click", function() {
		clearImageNumber();
	});

	otherKey = document.getElementById("btn-show");

	otherKey.addEventListener("click", function() {
		if (imageNumber === "") imageNumber = "0";

		let currentNumber = parseInt(imageNumber, 10);

		if (checkPicturesList(currentNumber)) {
			slideJump(currentNumber);
			changePictureInfo(currentNumber);
			changeImageToDownload(currentNumber);
		} else {
			// 入力した数値が範囲外であるというアラートを表示
			alert("1〜28までの数を入力してください。Please enter a number from 1 to 28.");
		};
	});
}

// 数値numberを受け取って該当する画像情報を表示
function changePictureInfo(number) {
	let infoBox = document.getElementById("info-box");

	infoBox.innerHTML = pictures[number].getPictureInfoString();
}

// 数値numberを受け取って該当する画像をダウンロードできるようにDownloadボタンのHTMLを変更
function changeImageToDownload(number) {
	let imgUrl = pictures[number].imgUrl2;
	let downloadBtn = document.getElementById("btn-download");

	downloadBtn.innerHTML = 
	`
	<a href="${imgUrl}" download target=”_blank”>Download</a>
	`;
}

// 数値numberを受け取ってグローバル変数imageNumberに追加し、ナンバーディスプレイに表示
function changeImageNumber(number) {
	imageNumber += number.toString();
	let imageNumberText = document.getElementById("img-number");
	imageNumberText.innerHTML = "Number: " + imageNumber;
}

// グローバル変数imageNumberから1文字削除し、ナンバーディスプレイを更新
function deleteImageNumber() {
	imageNumber = imageNumber.substring(0, imageNumber.length - 1);
	let imageNumberText = document.getElementById("img-number");
	imageNumberText.innerHTML = "Number: " + imageNumber;
}

// グローバル変数imageNumberの値をすべて削除し、ナンバーディスプレイを更新
function clearImageNumber() {
	imageNumber = "";
	let imageNumberText = document.getElementById("img-number");
	imageNumberText.innerHTML = "Number: " + imageNumber;
}

// 数値numberを受け取って該当する画像が登録されているかどうかチェック(true/false)
function checkPicturesList(number) {
	if (number === 0) return false;

	return pictures.length > number;
}

