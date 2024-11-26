function checkAnswers() {
    let score = 0;

    // Get student name
    const studentName = document.getElementById("studentName").value;
    document.getElementById("displayName").innerText = `Student Name: ${studentName}`;

    // Question 1
    if (document.getElementById("EnableExplainbestmodel").checked) {
        score += 5;
    }

    // Question 2
    const question2Answer = document.getElementById("question2").value;
    if (question2Answer === "reliability and safety") {
        score += 5;
    }

    // Question 3
    if (document.querySelector('input[name="workloadAI"]:checked')?.value === "Computer vision") {
        score += 5;
    }

    // Question 4
    if (document.querySelector('input[name="train"]:checked')?.value === "VALUE1") {
        score += 5;
    }

    // Question 5
    const question5Answer = document.getElementById("question5").value;
    if (question5Answer === "Reliability and safety") {
        score += 5;
    }
     // Question 6
    if (document.querySelector('input[name="model"]:checked')?.value === "CNN") {
        score += 10;
    }
    // Question 6 (Select two)
    //const q6Selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    //if (q6Selected.includes("Image classication") && q6Selected.includes("R")) {
   //     score += 5;
    //}

    // Question 7
    const question7Answer = document.getElementById("question7").value;
    if (question7Answer === "OCR") {
        score += 5;
    }

    // Question 8
    const question8Answer = document.getElementById("question8").value;
    if (question8Answer === "inclusiveness") {
        score += 5;
    }

    // Question 9
    if (document.querySelector('input[name="AI"]:checked')?.value === "CNN") {
        score += 5;
    }

    // Question 10
    if (document.querySelector('input[name="images"]:checked')?.value === "Assign a label to each pixel in the image") {
        score += 5;
    }

    // Question 11
    if (document.querySelector('input[name="At"]:checked')?.value === "Building AI systems that require no human oversight") {
        score += 5;
    }

    // Question 12
    if (document.querySelector('input[name="image"]:checked')?.value === "Face detection") {
        score += 5;
    }

    // Question 13
    if (document.querySelector('input[name="Am"]:checked')?.value === "Pixel") {
        score += 5;
    }

    //question 14
    
    const selectedOptions = [];
    if (document.getElementById("inclusiveness").checked) {
        selectedOptions.push("inclusiveness");
    }
    if (document.getElementById("opinionatedness").checked) {
        selectedOptions.push("opinionatedness");
    }
    if (document.getElementById("reliability and safety").checked) {
        selectedOptions.push("reliability and safety");
    }

    // Correct answers for Question 14
    const correctAnswers = ["inclusiveness", "reliability and safety"];

    // Calculate score for Question 14
    const correctSelected = correctAnswers.filter(option => selectedOptions.includes(option)).length;
    
    if (correctSelected === 2) {
        score += 10; // Full score if both correct answers are selected
    } else if (correctSelected === 1) {
        score += 5; // Partial score if only one correct answer is selected
    }

   

    if (document.querySelector('input[name="Angle"]:checked')?.value === "4") {
        score += 5;
    }
    if (document.querySelector('input[name="Angl"]:checked')?.value === "6") {
        score += 5;
    }

    

    // Question 17
    const selectOption = [];
    if (document.getElementById("speech1").checked) {
        selectOption.push("speech1");
    }
    if (document.getElementById("speech2").checked) {
        selectOption.push("speech2");
    }
    if (document.getElementById("speech3").checked) {
        selectOption.push("speech3");
    }

    // Correct answers for Question 14
    const correctAnswer = ["speech1", "speech3"];

    // Calculate score for Question 14
    const correctSelect = correctAnswer.filter(option => selectOption.includes(option)).length;
    if (correctSelect === 2) {
        score += 10; // Full score if both correct answers are selected
    } else if (correctSelect === 1) {
        score += 5; // Partial score if only one correct answer is selected
    }
    const resultPage = `result.html?name=${encodeURIComponent(studentName)}&marks=${encodeURIComponent(score)}`;
    window.location.href = resultPage;
}


   // Display result
   // document.getElementById("result").innerText = `You scored ${score} out of ${totalQuestions * 5}`;
    