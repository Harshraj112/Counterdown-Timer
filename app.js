const endDate = "17 March 2025 10:00 AM";
        document.getElementById("end-date").innerText = endDate;

        const inputs = document.querySelectorAll("input");

        const clock = () => {
            const end = new Date(endDate);
            const now = new Date();
            const diff = (end - now) / 1000; // Convert milliseconds to seconds

            if (diff < 0) {
                // If time has passed, stop the countdown
                inputs[0].value = 0;
                inputs[1].value = 0;
                inputs[2].value = 0;
                inputs[3].value = 0;
                return;
            }

            inputs[0].value = Math.floor(diff / 3600/ 24); // Days
            inputs[1].value = Math.floor((diff % 86400) / 3600); // Hours
            inputs[2].value = Math.floor((diff % 3600) / 60); // Minutes
            inputs[3].value = Math.floor(diff % 60); // Seconds
        };

        // Run the clock function every second
        clock(); // Call it once immediately
        setInterval(clock, 1000);