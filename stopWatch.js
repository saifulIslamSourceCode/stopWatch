//buttons
let startBtn = document.getElementById('btn-start');
let pauseBtn = document.getElementById('btn-pause');
let splitBtn = document.getElementById('btn-split');
let resetBtn = document.getElementById('btn-reset');
let addRecord = document.getElementById('add-record');
//spans
let currentTimespan = document.getElementById('current-time');
let hourSpan = document.getElementById('hour-span');
let minSpan = document.getElementById('min-span');
let secSpan = document.getElementById('sec-span');
let msSmall = document.getElementById('ms-small');

let ms = 0, sec = 0, min = 0, hour = 0;
let timer; //for setInterval()

		/*--------------------------functions---------------------*/

		//current time
		function currentTimeFn() {
			let currentTime = new Date();
			currentTimespan.innerText = currentTime.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
		}
		setInterval(currentTimeFn, 1000);



		//setInterval() for stopwatch
		function setIntervalfn() {
			if (!timer) {
				timer = setInterval(start, 10);
			}
		}


		//add text in  Container
		function innerContent(){
			msSmall.innerText = ms < 10 ? '0'+ms : ms;
			secSpan.innerText = sec < 10 ? '0'+sec : sec;
			minSpan.innerText = min < 10 ? '0'+min : min;
			hourSpan.innerText = hour < 10 ? '0'+hour : hour;
		}


				//start stopwatch
		function start() {
			ms++;
			innerContent();

			if (ms == 100) {
				sec++;
				ms = 0;
				innerContent();
			}
			if (sec == 60) {
				min++;
				sec = 0;
				innerContent();
			}
			if (min == 60) {
				hour++;
				min = 0;
				innerContent();
			}
		}


				//stop function
		function stop() {
			clearInterval(timer);
			timer = false;
		}

		function split() {
			addRecord.innerHTML = `
			Recorded Time - 
			<span>${hour < 10 ? '0'+hour : hour}:</span>
			<span>${min < 10 ? '0'+min : min}:</span>
			<span>${sec < 10 ? '0'+sec : sec}:</span>
			<span>${ms < 10 ? '0'+ms : ms}</span>
			`
		}

		function reset() {
			ms = 0, sec = 0, min = 0, hour = 0;
			addRecord.innerHTML = '';
			innerContent();
			stop();
		}

/*-------------------------------evebts---------------------*/
		//click to start 
		startBtn.addEventListener('click', () => {
			setIntervalfn();
		});

		pauseBtn.addEventListener('click', () => {
			stop();
		});
		
		splitBtn.addEventListener('click', () => {
			split();
		});

		resetBtn.addEventListener('click', () => {
			reset();
		});