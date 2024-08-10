var sentences = [];

	sentences[0] = "来了就坐坐罢！;)";
	sentences[1] = "“作为一个生命诞生本身便是一个奇迹。”";
	sentences[2] = "道理百遍，不如实践一遍。";
	sentences[3] = "现实是物质的幻象，幻象是想象的现实。";
	sentences[4] = "“钱不是问题，问题是没钱。”";
	sentences[5] = "“每个圈子都有小鬼，同样也有大大。”";

var randomIndex = Math.round( Math.random() * 5 );
document.write(sentences[randomIndex]);