var pic_width = 985;
var pic_height = 696;

var pic_data = '{"1F":"1F.png", "B1":"B1.png", "B2":"B2.png"}'
var path_data = '{\
    "car_1_12":[198,158,196,247,210,296,314,306,582,307,616,295],\
    "car_13_22":[202,167,201,285,285,306,373,307,415,333,424,367],\
    "car_23_32":[196,165,198,291,225,301,382,308,418,285,426,261],\
    "car_33_34_54":[199,168,200,285,239,304,286,306],\
    "car_35_42":[190,165,194,450,244,490],\
    "car_43_45":[198,166,187,389],\
    "car_46_47":[197,166,191,298],\
    "car_48_53":[200,166,198,235],\
    "car_55_64":[426,347,457,313,519,306,597,302,632,290],\
    "car_65_68":[426,346,426,325,457,311,533,303],\
    "car_69_71":[425,342,423,220],\
    "car_72_74":[426,343,424,129],\
    "car_75_98_99":[427,341,414,318,301,309],\
    "car_76_84":[423,371,423,333,400,317,328,308,225,309,203,278,197,254],\
    "car_85_89":[427,342,425,323,376,309,224,310,198,339,195,358],\
    "car_90_97":[425,345,422,323,376,307,249,305,200,334,189,390,198,470,241,493],\
    "motor_1_20":[422,341,455,315,529,306,539,363,536,417],\
    "motor_21_32":[424,340,453,318,520,315,533,325,535,494,551,498,577,483,583,476],\
    "motor_33_53":[425,339,453,311,514,300,528,248,539,183,559,161],\
    "motor_54_65":[426,337,420,174,409,155,367,156,334,158],\
    "motor_66_73":[424,342,392,312,214,323,197,393],\
    "motor_74_95":[93,463,143,491,164,540,176,605,242,615]\
	}';

	//motor_1_20"
var motor_data = '{\
	"1":{"x":"520","y":"415","loc":"B1","path":"motor_1_20"},\
	"2":{"x":"508","y":"415","loc":"B1","path":"motor_1_20"},\
	"3":{"x":"496","y":"415","loc":"B1","path":"motor_1_20"},\
	"3A":{"x":"484","y":"415","loc":"B1","path":"motor_1_20"},\
	"5":{"x":"472","y":"415","loc":"B1","path":"motor_1_20"},\
	"6":{"x":"520","y":"459","loc":"B1","path":"motor_1_20"},\
	"7":{"x":"508","y":"459","loc":"B1","path":"motor_1_20"},\
	"8":{"x":"496","y":"459","loc":"B1","path":"motor_1_20"},\
	"9":{"x":"484","y":"459","loc":"B1","path":"motor_1_20"},\
	"10":{"x":"472","y":"459","loc":"B1","path":"motor_1_20"},\
	"15":{"x":"520","y":"477","loc":"B1","path":"motor_1_20"},\
	"13A":{"x":"508","y":"477","loc":"B1","path":"motor_1_20"},\
	"13":{"x":"496","y":"477","loc":"B1","path":"motor_1_20"},\
	"12":{"x":"484","y":"477","loc":"B1","path":"motor_1_20"},\
	"11":{"x":"472","y":"477","loc":"B1","path":"motor_1_20"},\
	"16":{"x":"555","y":"418","loc":"B1","path":"motor_1_20"},\
	"17":{"x":"555","y":"430","loc":"B1","path":"motor_1_20"},\
	"18":{"x":"555","y":"442","loc":"B1","path":"motor_1_20"},\
	"19":{"x":"555","y":"469","loc":"B1","path":"motor_1_20"},\
	"20":{"x":"555","y":"480","loc":"B1","path":"motor_1_20"},\
	"21":{"x":"569","y":"458","loc":"B1","path":"motor_21_32"},\
	"22":{"x":"575","y":"448","loc":"B1","path":"motor_21_32"},\
	"23":{"x":"581","y":"440","loc":"B1","path":"motor_21_32"},\
	"23A":{"x":"587","y":"430","loc":"B1","path":"motor_21_32"},\
	"25":{"x":"564","y":"520","loc":"B1","path":"motor_21_32"},\
	"26":{"x":"584","y":"500","loc":"B1","path":"motor_21_32"},\
	"27":{"x":"607","y":"469","loc":"B1","path":"motor_21_32"},\
	"28":{"x":"620","y":"451","loc":"B1","path":"motor_21_32"},\
	"29":{"x":"634","y":"430","loc":"B1","path":"motor_21_32"},\
	"30":{"x":"649","y":"415","loc":"B1","path":"motor_21_32"},\
	"31":{"x":"621","y":"390","loc":"B1","path":"motor_21_32"},\
	"32":{"x":"629","y":"380","loc":"B1","path":"motor_21_32"},\
	"33":{"x":"616","y":"120","loc":"B1","path":"motor_33_53"},\
	"33A":{"x":"610","y":"129","loc":"B1","path":"motor_33_53"},\
	"35":{"x":"600","y":"138","loc":"B1","path":"motor_33_53"},\
	"36":{"x":"595","y":"148","loc":"B1","path":"motor_33_53"},\
	"37":{"x":"589","y":"156","loc":"B1","path":"motor_33_53"},\
	"38":{"x":"581","y":"166","loc":"B1","path":"motor_33_53"},\
	"39":{"x":"574","y":"174","loc":"B1","path":"motor_33_53"},\
	"40":{"x":"569","y":"183","loc":"B1","path":"motor_33_53"},\
	"41":{"x":"561","y":"194","loc":"B1","path":"motor_33_53"},\
	"42":{"x":"554","y":"202","loc":"B1","path":"motor_33_53"},\
	"43":{"x":"546","y":"221","loc":"B1","path":"motor_33_53"},\
	"43A":{"x":"573","y":"105","loc":"B1","path":"motor_33_53"},\
	"45":{"x":"565","y":"114","loc":"B1","path":"motor_33_53"},\
	"46":{"x":"559","y":"123","loc":"B1","path":"motor_33_53"},\
	"47":{"x":"552","y":"132","loc":"B1","path":"motor_33_53"},\
	"48":{"x":"544","y":"140","loc":"B1","path":"motor_33_53"},\
	"49":{"x":"538","y":"149","loc":"B1","path":"motor_33_53"},\
	"50":{"x":"557","y":"91","loc":"B1","path":"motor_33_53"},\
	"51":{"x":"544","y":"91","loc":"B1","path":"motor_33_53"},\
	"52":{"x":"524","y":"70","loc":"B1","path":"motor_33_53"},\
	"53":{"x":"554","y":"60","loc":"B1","path":"motor_33_53"},\
	"53A":{"x":"364","y":"141","loc":"B1","path":"motor_54_65"},\
	"55":{"x":"344","y":"134","loc":"B1","path":"motor_54_65"},\
	"56":{"x":"333","y":"134","loc":"B1","path":"motor_54_65"},\
	"57":{"x":"320","y":"134","loc":"B1","path":"motor_54_65"},\
	"58":{"x":"310","y":"134","loc":"B1","path":"motor_54_65"},\
	"59":{"x":"297","y":"134","loc":"B1","path":"motor_54_65"},\
	"60":{"x":"288","y":"134","loc":"B1","path":"motor_54_65"},\
	"61":{"x":"274","y":"134","loc":"B1","path":"motor_54_65"},\
	"62":{"x":"250","y":"153","loc":"B1","path":"motor_54_65"},\
	"63":{"x":"250","y":"165","loc":"B1","path":"motor_54_65"},\
	"63A":{"x":"296","y":"172","loc":"B1","path":"motor_54_65"},\
	"65":{"x":"311","y":"179","loc":"B1","path":"motor_54_65"},\
	"66A":{"x":"250","y":"357","loc":"B1","path":"motor_66_73"},\
	"66":{"x":"245","y":"370","loc":"B1","path":"motor_66_73"},\
	"67A":{"x":"250","y":"382","loc":"B1","path":"motor_66_73"},\
	"67":{"x":"245","y":"397","loc":"B1","path":"motor_66_73"},\
	"68":{"x":"241","y":"410","loc":"B1","path":"motor_66_73"},\
	"69":{"x":"241","y":"434","loc":"B1","path":"motor_66_73"},\
	"70":{"x":"157","y":"496","loc":"B1","path":"motor_66_73"},\
	"71":{"x":"157","y":"509","loc":"B1","path":"motor_66_73"},\
	"72":{"x":"157","y":"522","loc":"B1","path":"motor_66_73"},\
	"73":{"x":"157","y":"532","loc":"B1","path":"motor_66_73"},\
	"74":{"x":"215","y":"641","loc":"1F","path":"motor_74_95"},\
	"75":{"x":"226","y":"640","loc":"1F","path":"motor_74_95"},\
	"76":{"x":"239","y":"639","loc":"1F","path":"motor_74_95"},\
	"77":{"x":"251","y":"637","loc":"1F","path":"motor_74_95"},\
	"78":{"x":"261","y":"635","loc":"1F","path":"motor_74_95"},\
	"79":{"x":"274","y":"634","loc":"1F","path":"motor_74_95"},\
	"80":{"x":"284","y":"634","loc":"1F","path":"motor_74_95"},\
	"81":{"x":"296","y":"632","loc":"1F","path":"motor_74_95"},\
	"82":{"x":"307","y":"631","loc":"1F","path":"motor_74_95"},\
	"83":{"x":"319","y":"629","loc":"1F","path":"motor_74_95"},\
	"84":{"x":"330","y":"626","loc":"1F","path":"motor_74_95"},\
	"85":{"x":"343","y":"626","loc":"1F","path":"motor_74_95"},\
	"86":{"x":"354","y":"626","loc":"1F","path":"motor_74_95"},\
	"87":{"x":"365","y":"625","loc":"1F","path":"motor_74_95"},\
	"88":{"x":"379","y":"625","loc":"1F","path":"motor_74_95"},\
	"89":{"x":"426","y":"617","loc":"1F","path":"motor_74_95"},\
	"90":{"x":"426","y":"606","loc":"1F","path":"motor_74_95"},\
	"91":{"x":"427","y":"595","loc":"1F","path":"motor_74_95"},\
	"92":{"x":"270","y":"590","loc":"1F","path":"motor_74_95"},\
	"93":{"x":"294","y":"590","loc":"1F","path":"motor_74_95"},\
	"94":{"x":"317","y":"590","loc":"1F","path":"motor_74_95"},\
	"95":{"x":"349","y":"590","loc":"1F","path":"motor_74_95"}\
}';

var car_data = '{\
	"1":{"x":"737","y":"242","loc":"B2","path":"car_1_12"},\
	"2":{"x":"723","y":"267","loc":"B2","path":"car_1_12"},\
	"3":{"x":"708","y":"291","loc":"B2","path":"car_1_12"},\
	"3A":{"x":"681","y":"321","loc":"B2","path":"car_1_12"},\
	"5":{"x":"667","y":"344","loc":"B2","path":"car_1_12"},\
	"6":{"x":"650","y":"369","loc":"B2","path":"car_1_12"},\
	"7":{"x":"624","y":"157","loc":"B2","path":"car_1_12"},\
	"8":{"x":"608","y":"182","loc":"B2","path":"car_1_12"},\
	"9":{"x":"591","y":"206","loc":"B2","path":"car_1_12"},\
	"10":{"x":"569","y":"239","loc":"B2","path":"car_1_12"},\
	"11":{"x":"594","y":"394","loc":"B2","path":"car_1_12"},\
	"12":{"x":"565","y":"396","loc":"B2","path":"car_1_12"},\
	"13":{"x":"505","y":"345","loc":"B2","path":"car_13_22"},\
	"13A":{"x":"492","y":"373","loc":"B2","path":"car_13_22"},\
	"15":{"x":"490","y":"401","loc":"B2","path":"car_13_22"},\
	"16":{"x":"489","y":"431","loc":"B2","path":"car_13_22"},\
	"17":{"x":"489","y":"473","loc":"B2","path":"car_13_22"},\
	"18":{"x":"489","y":"502","loc":"B2","path":"car_13_22"},\
	"19":{"x":"489","y":"530","loc":"B2","path":"car_13_22"},\
	"20":{"x":"359","y":"533","loc":"B2","path":"car_13_22"},\
	"21":{"x":"359","y":"505","loc":"B2","path":"car_13_22"},\
	"22":{"x":"361","y":"476","loc":"B2","path":"car_13_22"},\
	"23":{"x":"498","y":"274","loc":"B2","path":"car_23_32"},\
	"23A":{"x":"498","y":"248","loc":"B2","path":"car_23_32"},\
	"25":{"x":"496","y":"217","loc":"B2","path":"car_23_32"},\
	"26":{"x":"497","y":"188","loc":"B2","path":"car_23_32"},\
	"27":{"x":"506","y":"147","loc":"B2","path":"car_23_32"},\
	"28":{"x":"506","y":"118","loc":"B2","path":"car_23_32"},\
	"29":{"x":"506","y":"89","loc":"B2","path":"car_23_32"},\
	"30":{"x":"366","y":"91","loc":"B2","path":"car_23_32"},\
	"31":{"x":"366","y":"120","loc":"B2","path":"car_23_32"},\
	"32":{"x":"366","y":"149","loc":"B2","path":"car_23_32"},\
	"33":{"x":"296","y":"366","loc":"B2","path":"car_33_34_54"},\
	"33A":{"x":"267","y":"369","loc":"B2","path":"car_33_34_54"},\
	"35":{"x":"267","y":"433","loc":"B2","path":"car_35_42"},\
	"36":{"x":"296","y":"435","loc":"B2","path":"car_35_42"},\
	"37":{"x":"310","y":"561","loc":"B2","path":"car_35_42"},\
	"38":{"x":"283","y":"562","loc":"B2","path":"car_35_42"},\
	"39":{"x":"256","y":"564","loc":"B2","path":"car_35_42"},\
	"40":{"x":"216","y":"562","loc":"B2","path":"car_35_42"},\
	"41":{"x":"186","y":"564","loc":"B2","path":"car_35_42"},\
	"42":{"x":"143","y":"473","loc":"B2","path":"car_35_42"},\
	"43":{"x":"138","y":"430","loc":"B2","path":"car_43_45"},\
	"43A":{"x":"138","y":"400","loc":"B2","path":"car_43_45"},\
	"45":{"x":"138","y":"368","loc":"B2","path":"car_43_45"},\
	"46":{"x":"138","y":"325","loc":"B2","path":"car_46_47"},\
	"47":{"x":"138","y":"297","loc":"B2","path":"car_46_47"},\
	"48":{"x":"138","y":"256","loc":"B2","path":"car_48_53"},\
	"49":{"x":"138","y":"227","loc":"B2","path":"car_48_53"},\
	"50":{"x":"138","y":"199","loc":"B2","path":"car_48_53"},\
	"51":{"x":"266","y":"255","loc":"B2","path":"car_48_53"},\
	"52":{"x":"266","y":"227","loc":"B2","path":"car_48_53"},\
	"53":{"x":"266","y":"199","loc":"B2","path":"car_48_53"},\
	"53A":{"x":"311","y":"237","loc":"B2","path":"car_33_34_54"},\
	"55":{"x":"735","y":"241","loc":"B1","path":"car_55_64"},\
	"56":{"x":"712","y":"260","loc":"B1","path":"car_55_64"},\
	"57":{"x":"703","y":"286","loc":"B1","path":"car_55_64"},\
	"58":{"x":"685","y":"320","loc":"B1","path":"car_55_64"},\
	"59":{"x":"667","y":"342","loc":"B1","path":"car_55_64"},\
	"60":{"x":"653","y":"369","loc":"B1","path":"car_55_64"},\
	"61":{"x":"629","y":"161","loc":"B1","path":"car_55_64"},\
	"62":{"x":"611","y":"184","loc":"B1","path":"car_55_64"},\
	"63":{"x":"594","y":"209","loc":"B1","path":"car_55_64"},\
	"63A":{"x":"572","y":"242","loc":"B1","path":"car_55_64"},\
	"65":{"x":"594","y":"393","loc":"B1","path":"car_65_68"},\
	"66":{"x":"566","y":"382","loc":"B1","path":"car_65_68"},\
	"67":{"x":"509","y":"372","loc":"B1","path":"car_65_68"},\
	"68":{"x":"478","y":"370","loc":"B1","path":"car_65_68"},\
	"69":{"x":"493","y":"250","loc":"B1","path":"car_69_71"},\
	"70":{"x":"493","y":"228","loc":"B1","path":"car_69_71"},\
	"71":{"x":"493","y":"190","loc":"B1","path":"car_69_71"},\
	"72":{"x":"493","y":"143","loc":"B1","path":"car_72_74"},\
	"73":{"x":"513","y":"116","loc":"B1","path":"car_72_74"},\
	"73A":{"x":"513","y":"84","loc":"B1","path":"car_72_74"},\
	"75":{"x":"307","y":"229","loc":"B1","path":"car_75_98_99"},\
	"76":{"x":"259","y":"250","loc":"B1","path":"car_76_84"},\
	"77":{"x":"260","y":"221","loc":"B1","path":"car_76_84"},\
	"78":{"x":"256","y":"190","loc":"B1","path":"car_76_84"},\
	"79":{"x":"123","y":"75","loc":"B1","path":"car_76_84"},\
	"80":{"x":"123","y":"107","loc":"B1","path":"car_76_84"},\
	"81":{"x":"123","y":"137","loc":"B1","path":"car_76_84"},\
	"82":{"x":"123","y":"197","loc":"B1","path":"car_76_84"},\
	"83":{"x":"123","y":"228","loc":"B1","path":"car_76_84"},\
	"83A":{"x":"123","y":"257","loc":"B1","path":"car_76_84"},\
	"85":{"x":"123","y":"301","loc":"B1","path":"car_85_89"},\
	"86":{"x":"123","y":"323","loc":"B1","path":"car_85_89"},\
	"87":{"x":"123","y":"369","loc":"B1","path":"car_85_89"},\
	"88":{"x":"123","y":"401","loc":"B1","path":"car_85_89"},\
	"89":{"x":"123","y":"433","loc":"B1","path":"car_85_89"},\
	"90":{"x":"133","y":"477","loc":"B1","path":"car_90_97"},\
	"91":{"x":"179","y":"574","loc":"B1","path":"car_90_97"},\
	"92":{"x":"208","y":"574","loc":"B1","path":"car_90_97"},\
	"93":{"x":"248","y":"574","loc":"B1","path":"car_90_97"},\
	"93A":{"x":"272","y":"574","loc":"B1","path":"car_90_97"},\
	"95":{"x":"306","y":"574","loc":"B1","path":"car_90_97"},\
	"96":{"x":"290","y":"441","loc":"B1","path":"car_90_97"},\
	"97":{"x":"259","y":"441","loc":"B1","path":"car_90_97"},\
	"98":{"x":"272","y":"366","loc":"B1","path":"car_75_98_99"},\
	"99":{"x":"312","y":"366","loc":"B1","path":"car_75_98_99"}\
}';

var stage;
var layer;
var tooltip_motor;
var textNode_motor;
var imageObj = new Image();
var path = new Konva.Line();
const load_data = new Vue({
	methods: {
		async main(){
			container.init();
		}
	}
})

const container = new Vue({
    el: '#container',
    data: {
    	select_motor:"",
    	select_car:"",
    	pic_data: [],
    	path_data: [],
    	sorted_motor_name: [],
    	sorted_car_name: [],
    	motor_data: [],
    	car_data: [],
    	message: "hello world",
    	point_ary: [],
    },
    updated: function () {
        
    },
    watch:{
    	select_motor: function(){
    		if(this.select_motor !== "")
				this.show_tooltip_motor(this.select_motor);
    	},
    	select_car: function(){
    		if(this.select_car !== "")
				this.show_tooltip_car(this.select_car);
    	}
    },
    methods: {
    pop(event){
    	console.log("client:"+(event.pageX)+","+event.pageY);
		this.point_ary.push(event.pageX);
		this.point_ary.push(event.pageY);
		path.destroy();
		path = new Konva.Arrow({
	        points: this.point_ary,
	        stroke: 'red',
	        strokeWidth: 4,
	        lineJoin: 'round',
	        /*
	         * line segments with a length of 33px
	         * with a gap of 10px
	         */
	        dash: [33, 10],
	        lineCap: 'round',
	        tension: 0.5,
	      });
		layer.add(path);
        console.log("["+this.point_ary.join(",")+"]");
        //path.points = this.point_ary;
        //var json = JSON.stringify(this.point_ary);
        //console.log(json);

        layer.draw();
    },
	close(event) {
		load_data.load_selector();
		app.showModal = false;
	},
	downloadURI(uri, name){
		var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;

	},
	getDataUrl() {
		var imageName = "wh_parking.png";
		if(this.select_motor!=""){
			imageName = "motor_"+this.select_motor+".png";
		}
		if(this.select_car!=""){
			imageName = "car_"+this.select_car+".png";
		}
        const dataURL = stage.toDataURL();
        console.log("this.select_motor:"+this.select_motor);
        console.log("this.select_car:"+this.select_car);
    	console.log(imageName);
    	this.downloadURI(dataURL, imageName);
	},
	init(){
		
		this.pic_data = JSON.parse(pic_data);
		this.path_data = JSON.parse(path_data);
		this.car_data = JSON.parse(car_data);
		this.motor_data = JSON.parse(motor_data);
		this.sorted_motor_name = this.sort_data(this.motor_data),
    	this.sorted_car_name = this.sort_data(this.car_data),


		stage = new Konva.Stage({
			container: 'figure',
			width: pic_width,
			height: pic_height,
		});
		var imgLayer = new Konva.Layer();
      		stage.add(imgLayer);
		// main API:
		
		imageObj.onload = function () {
			var yoda = new Konva.Image({
				x: 0,
				y: 0,
				width: pic_width,
				height: pic_height,
				image: imageObj
			});
			// add the shape to the layer
			imgLayer.add(yoda);
		};
		imageObj.src = 'images/B1.png';
		
		layer = new Konva.Layer();
		
		// tooltip motor
		tooltip_motor = new Konva.Label({
			x: 0,
			y: 0,
			opacity: 0.75,
		});

		tooltip_motor.add(
			new Konva.Tag({
				fill: 'green',
				pointerDirection: 'down',
				pointerWidth: 10,
				pointerHeight: 10,
				lineJoin: 'round',
				shadowColor: 'black',
				shadowBlur: 10,
				shadowOffsetX: 10,
				shadowOffsetY: 10,
				shadowOpacity: 0.5,
			})
		);

		textNode_motor = new Konva.Text({
			text: "",
			fontFamily: 'Calibri',
			fontSize: 18,
			padding: 5,
			fill: 'white',
		})
		tooltip_motor.add(textNode_motor);

		// tooltip car
		tooltip_car = new Konva.Label({
			x: 0,
			y: 0,
			opacity: 0.75,
		});

		tooltip_car.add(
			new Konva.Tag({
				fill: 'CornflowerBlue',
				pointerDirection: 'down',
				pointerWidth: 10,
				pointerHeight: 10,
				lineJoin: 'round',
				shadowColor: 'black',
				shadowBlur: 10,
				shadowOffsetX: 10,
				shadowOffsetY: 10,
				shadowOpacity: 0.5,
			})
		);

		textNode_car = new Konva.Text({
			text: "",
			fontFamily: 'Calibri',
			fontSize: 18,
			padding: 5,
			fill: 'white',
		})
		tooltip_car.add(textNode_car);
		
		layer.add(tooltip_motor);
		layer.add(tooltip_car);
		stage.add(layer);

	},
	draw_path(path_name){
		// dashed line
		var path_ary = this.path_data[path_name];
		console.log(path_name);
		console.log(path_ary);
		path.destroy();
		path = new Konva.Arrow({
	        points: path_ary,
	        stroke: 'LightSeaGreen',
	        strokeWidth: 4,
	        lineJoin: 'round',
	        lineCap: 'round',
	        tension: 0.5,
	        opacity: 0.8,
	      });
		
		// add the shape to the layer
		layer.add(path);
	},
	sort_data(data){
		//const ordered = Object.keys(data).sort().reduce(
		//  (obj, key) => { 
		//    obj[key] = data[key]; 
		//    return obj;
		//  }, 
		//  {}
		//);
		//return ordered;
		var key, sorted = [];

	    for (key in data) {
	        if (data.hasOwnProperty(key)) {
	            sorted.push(key);
	        }
	    }

	    //a.sort();
	    sorted.sort(function(a, b) {
	    	var re = /a/gi;
			a = a.replace(re, ".1");
			b = b.replace(re, ".1");
			return parseFloat(a) - parseFloat(b);
		    //return a.distance - b.distance;
		});

	    return sorted;
	},
	show_tooltip_car(name){
		var item = this.car_data[name];
		var loc_pic = this.pic_data[item.loc];
		
		imageObj.src = 'images/'+loc_pic;
		console.log(imageObj.src);
		tooltip_car.setAttr('x', parseFloat(item.x));
		tooltip_car.setAttr('y', parseFloat(item.y));
		textNode_car.setAttr('text', "汽車位"+item.loc+"-"+name);
		tooltip_car.show();
		tooltip_motor.hide();
		this.select_motor = "";
		this.draw_path(item.path);
		

		layer.draw();
	},
	show_tooltip_motor(name){
		var item = this.motor_data[name];
		var loc_pic = this.pic_data[item.loc];
		
		imageObj.src = 'images/'+loc_pic;
		console.log(imageObj.src);
		tooltip_motor.setAttr('x', parseFloat(item.x));
		tooltip_motor.setAttr('y', parseFloat(item.y));
		textNode_motor.setAttr('text', "機車位"+item.loc+"-"+name);
		tooltip_motor.show();
		tooltip_car.hide();
    	this.select_car = "";
    	this.draw_path(item.path);
		layer.draw();
	}
    	
    }
})
	
load_data.main();
