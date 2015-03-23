
		<!-- Update the pointLabel Text -->
		<script>
			// Set array of colors
			var colorHex =  {
			    "a":"#282828",
			    "b":"#5f3131",
			    "c":"#520000",
			    "d":"#763408",
			    "e":"#79660c",
			    "f":"#a5ac16",
			    "g":"#508509",
			    "h":"#065b06",
			    "i":"#239668",
			    "j":"#11999e",
			    "k":"#0e5a8a",
			    "l":"#0c2666",
			    "m":"#3b0b87",
			    "n":"#5a10b3",
			    "o":"#8b21bd",
			    "p":"#b020bd",
			    "q":"#ea4adf",
			    "r":"#eaaee6",
			    "s":"#9d9d9a"
			};

			// Set specific color
			var colorHex = "#aaa7a2";

			function changePointlabel(useElement) {
				var pointId = useElement.getAttribute("id");
				var pointLabel = document.getElementById("pointLabel");

				var pointAlpha = pointId.charAt(0);
				var pointNum = pointId.substring(1);

				// console.log(pointId);

				pointLabel.innerHTML = "<" + "p" + ">" + pointAlpha + "-" + pointNum + "<" + "/p" + ">";

				document.body.style.backgroundColor = colorHex[pointAlpha]; // Color Hex ["a"]
			}
		</script>