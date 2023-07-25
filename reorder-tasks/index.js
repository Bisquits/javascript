function initialize() {
	var downButtons = document.querySelectorAll('.downButton');
	var upButtons = document.querySelectorAll('.upButton');

	downButtons.forEach(function (downButton) {
		downButton.addEventListener('click', function () {
			var currentContainer = this.parentNode;
			var nextContainer = currentContainer.nextElementSibling;

			if (nextContainer) {
				var nextTask = nextContainer.querySelector('span');
				var currentTask = currentContainer.querySelector('span');

				currentContainer.replaceChild(nextTask, currentTask);
				nextContainer.appendChild(currentTask);
			}
		});
	});

	upButtons.forEach(function (upButton) {
		upButton.addEventListener('click', function () {
			var currentContainer = this.parentNode;
			var previousContainer = currentContainer.previousElementSibling;

			if (previousContainer) {
				var previousTask = previousContainer.querySelector('span');
				var currentTask = currentContainer.querySelector('span');

				currentContainer.replaceChild(previousTask, currentTask);
				previousContainer.insertBefore(
					currentTask,
					previousContainer.lastElementChild
				);
			}
		});
	});
}

document.body.innerHTML = `
    <div>
        <span>Read emails</span>
        <button class="downButton" type="button">&darr;</button>
    </div>
    <div>
        <span>Prepare presentation</span>
        <button class="downButton" type="button">&darr;</button>
        <button class="upButton" type="button">&uarr;</button></div>
    <div>
        <span>Monthly report</span>
        <button class="upButton" type="button">&uarr;</button>
    </div>`;

initialize();

document.querySelectorAll('button')[0].click();
document.querySelectorAll('button')[3].click();
document.querySelectorAll('button')[1].click();

console.log(document.body.innerHTML);
