document.getElementById("analyzeBtn").addEventListener("click", function() {
  const jobSkillsInput = document.getElementById("jobSkills").value.toLowerCase();
  const resumeText = document.getElementById("resumeText").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");

  if (!jobSkillsInput || !resumeText) {
    alert("Please enter both job skills and resume text!");
    return;
  }

  const jobSkills = jobSkillsInput.split(",").map(s => s.trim()).filter(Boolean);
  const matched = [];
  const missing = [];

  jobSkills.forEach(skill => {
    if (resumeText.includes(skill)) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  });

  const matchScore = Math.round((matched.length / jobSkills.length) * 100);

  document.getElementById("score").textContent = matchScore;
  document.getElementById("matchedSkills").textContent = matched.join(", ") || "None";
  document.getElementById("missingSkills").textContent = missing.join(", ") || "None";
  resultBox.style.display = "block";
});
