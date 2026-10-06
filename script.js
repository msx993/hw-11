
        let minutes = 60;
        let timer1Started = false;

        function startTimer1() {
            if (timer1Started) return;

            timer1Started = true;

            let interval = setInterval(function() {
                minutes--;

                document.getElementById("timer1").textContent =
                    minutes + ":00";

                if (minutes === 30) {
                    alert("Залишилось менше половини часу!");
                }

                if (minutes <= 0) {
                    clearInterval(interval);
                }
            }, 60000);
        }

        let time = 30000;
        let interval2;

        function startTimer2() {
            const button = document.getElementById("startButton");
            button.disabled = true;

            time = 30000;

            interval2 = setInterval(function() {
                time--;

                document.getElementById("timer2").textContent =
                    (time / 1000).toFixed(3);

                if (time <= 10000) {
                    document.getElementById("timer2")
                        .classList.add("animation");
                }

                if (time <= 0) {
                    clearInterval(interval2);

                    document.getElementById("timer2").textContent = "Час вийшов!";

                    document.getElementById("timer2")
                        .classList.remove("animation");

                    button.disabled = false;
                }
            }, 1);
        }