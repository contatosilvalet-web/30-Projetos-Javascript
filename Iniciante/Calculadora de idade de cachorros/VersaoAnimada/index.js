        document.addEventListener('DOMContentLoaded', () => {
            const yearsInput = document.getElementById('yearsInput');
            const monthsInput = document.getElementById('monthsInput');
            const sizeRadios = document.querySelectorAll('input[name="dogSize"]');
            const mascotContainer = document.getElementById('dogMascotContainer');

            function calculateAge() {
                let years = parseInt(yearsInput.value) || 0;
                let months = parseInt(monthsInput.value) || 0;

                if (years < 0) { years = 0; yearsInput.value = 0; }
                if (months < 0) { months = 0; monthsInput.value = 0; }
                if (months > 11) { months = 11; monthsInput.value = 11; }

                const totalYears = years + (months / 12);
                const selectedSize = document.querySelector('input[name="dogSize"]:checked').value;

                let humanAge = 0;

                if (totalYears === 0) {
                    humanAge = 0;
                } else if (totalYears <= 1) {
                    humanAge = totalYears * 15;
                } else if (totalYears <= 2) {
                    humanAge = 15 + ((totalYears - 1) * 9);
                } else {
                    let extraYearFactor = 5;
                    if (selectedSize === 'small') extraYearFactor = 4;
                    if (selectedSize === 'large') extraYearFactor = 7;

                    humanAge = 24 + ((totalYears - 2) * extraYearFactor);
                }

                const finalAge = Math.round(humanAge);
                document.getElementById('humanAgeCounter').innerText = finalAge;
                updateUI(totalYears, selectedSize);
            }

            function updateUI(totalYears, size) {
                const stageBadge = document.getElementById('lifeStageBadge');
                const stageTag = document.getElementById('stageTag');
                const petGreeting = document.getElementById('petGreeting');
                const petSpeech = document.getElementById('petSpeech');
                const explanationText = document.getElementById('explanationText');

                const puppyBow = document.getElementById('puppyBow');
                const seniorGlasses = document.getElementById('seniorGlasses');
                const eyePuppy = document.getElementById('eyePuppy');
                const eyeAdult = document.getElementById('eyeAdult');
                const eyeSenior = document.getElementById('eyeSenior');
                const dogTongue = document.getElementById('dogTongue');
                const dogTail = document.getElementById('dogTail');

                if (totalYears < 1) {
                    stageBadge.innerText = '🍼 Filhotinho';
                    stageTag.innerText = 'Filhote';
                    petGreeting.innerText = 'Au au! Sou um bebê! 🐾';
                    petSpeech.innerText = '"Tudo é novo e adorável pra mim! Adoro brincar e morder sapatos."';
                    explanationText.innerText = 'No primeiro ano, os cães desenvolvem-se muito rápido! 1 ano canino equivale a cerca de 15 anos humanos.';
                    
                    puppyBow.classList.remove('opacity-0');
                    seniorGlasses.classList.add('opacity-0');
                    eyePuppy.classList.remove('opacity-0');
                    eyeAdult.classList.add('opacity-0');
                    eyeSenior.classList.add('opacity-0');

                    dogTongue.setAttribute('d', 'M96 98 C96 98 100 112 104 98 Z');
                    dogTail.className.baseVal = 'animate-tail-fast';

                } else if (totalYears < 7) {
                    stageBadge.innerText = '⚡ Jovem / Adulto';
                    stageTag.innerText = 'Adulto';
                    petGreeting.innerText = 'Cheio de energia! 🎾';
                    petSpeech.innerText = '"Estou na minha melhor fase! Vamos passear no parque?"';
                    explanationText.innerText = 'Nos 2 primeiros anos, o cão chega aos 24 anos humanos. Depois disso, envelhece entre 4 a 7 anos por ano real dependendo do porte.';
                    
                    puppyBow.classList.add('opacity-0');
                    seniorGlasses.classList.add('opacity-0');
                    eyePuppy.classList.add('opacity-0');
                    eyeAdult.classList.remove('opacity-0');
                    eyeSenior.classList.add('opacity-0');

                    dogTongue.setAttribute('d', 'M96 98 C96 98 100 108 104 98 Z');
                    dogTail.className.baseVal = 'animate-tail-fast';

                } else {
                    stageBadge.innerText = '👓 Sênior / Sabido';
                    stageTag.innerText = 'Sênior';
                    petGreeting.innerText = 'Sou um cão sábio 🦴';
                    petSpeech.innerText = '"Gosto de um bom cochilo ao sol e de muito carinho na cabeça."';
                    explanationText.innerText = 'Cães idosos precisam de visitas regulares ao veterinário, alimentação adequada e muito carinho!';
                    
                    puppyBow.classList.add('opacity-0');
                    seniorGlasses.classList.remove('opacity-0');
                    eyePuppy.classList.add('opacity-0');
                    eyeAdult.classList.add('opacity-0');
                    eyeSenior.classList.remove('opacity-0');

                    dogTongue.setAttribute('d', 'M96 98 C96 98 100 102 104 98 Z');
                    dogTail.className.baseVal = 'animate-tail-slow';
                }
            }

            function triggerBark() {
                const bubble = document.getElementById('barkBubble');
                const dog = document.getElementById('dogSvg');

                dog.classList.add('-translate-y-3', 'scale-105');
                setTimeout(() => dog.classList.remove('-translate-y-3', 'scale-105'), 200);

                bubble.classList.remove('opacity-0', 'scale-75');
                bubble.classList.add('opacity-100', 'scale-100');

                setTimeout(() => {
                    bubble.classList.remove('opacity-100', 'scale-100');
                    bubble.classList.add('opacity-0', 'scale-75');
                }, 1000);
            }

            yearsInput.addEventListener('input', calculateAge);
            monthsInput.addEventListener('input', calculateAge);
            sizeRadios.forEach(radio => radio.addEventListener('change', calculateAge));
            mascotContainer.addEventListener('click', triggerBark);

            calculateAge();
        });