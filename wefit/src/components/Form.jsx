import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    gender: 0,
    age: 0,
    fitness_level: 1,
    exercise_frequency: 2,
    participate_running: 0,
    participate_gym: 0,
    participate_team: 1,
    participate_dance: 0,
    participate_yoga: 0,
    participate_swimming: 0,
    participate_lifting_weights: 1,
    time_of_exercises_earlymorning: 0,
    time_of_exercises_afternoon: 0,
    time_of_exercises_evening: 1,
    health: 1,
  });

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/user/update", {
        formData,
      });
      console.log(response);
      // const success = response.status === 200
      // if (success) navigate('/dashboard')
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender"
                value="0"
                onChange={handleChange}
                checked={formData.gender}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender"
                value="1"
                onChange={handleChange}
                checked={formData.gender_identity}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
            </div>

            <label>Age</label>
            <div className="multiple-input-container">
              <input
                id="young-age-identity"
                type="radio"
                name="age"
                value="0"
                onChange={handleChange}
                checked={formData.age}
              />
              <label htmlFor="young-age-identity">15-18</label>
              <input
                id="twenties-age-identity"
                type="radio"
                name="age"
                value="1"
                onChange={handleChange}
                checked={formData.age}
              />
              <label htmlFor="twenties-age-identity">19-25</label>
              <input
                id="mature-age-identity"
                type="radio"
                name="age"
                value="2"
                onChange={handleChange}
                checked={formData.age}
              />
              <label htmlFor="mature-age-identity">26-30</label>
              <input
                id="thirties-age-identity"
                type="radio"
                name="age"
                value="3"
                onChange={handleChange}
                checked={formData.age}
              />
              <label htmlFor="thirties-age-identity">30-40</label>
              <input
                id="old-age-identity"
                type="radio"
                name="age"
                value="4"
                onChange={handleChange}
                checked={formData.age}
              />
              <label htmlFor="old-age-identity">40+</label>
            </div>

            <label htmlFor="show-gender">How Fit Are You</label>
            <div className="multiple-input-container">
              <input
                id="Starting-level-identity"
                type="radio"
                name="fitness_level"
                value="0"
                onChange={handleChange}
                checked={formData.fitness_level}
              />
              <label htmlFor="Starting-level-identity">Starting</label>
              <input
                id="beginner-level-identity"
                type="radio"
                name="fitness_level"
                value="1"
                onChange={handleChange}
                checked={formData.fitness_level}
              />
              <label htmlFor="beginner-level-identity">Beginner</label>
              <input
                id="Intermediate-level-identity"
                type="radio"
                name="fitness_level"
                value="2"
                onChange={handleChange}
                checked={formData.fitness_level}
              />
              <label htmlFor="Intermediate-level-identity">Intermediate</label>
              <input
                id="experienced-level-identity"
                type="radio"
                name="fitness_level"
                value="3"
                onChange={handleChange}
                checked={formData.fitness_level}
              />
              <label htmlFor="experienced-level-identity">Experienced</label>
              <input
                id="athlete-level-identity"
                type="radio"
                name="fitness_level"
                value="4"
                onChange={handleChange}
                checked={formData.fitness_level}
              />
              <label htmlFor="athlete-level-identity">Athlete</label>
            </div>

            <label>How Often Do You Train A Week</label>
            <div className="multiple-input-container">
              <input
                id="0-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="0"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "0"}
              />
              <label htmlFor="0-freq-identity">0</label>
              <input
                id="1-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="1"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "1"}
              />
              <label htmlFor="1-freq-identity">1-2</label>
              <input
                id="2-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="2"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "2"}
              />
              <label htmlFor="2-freq-identity">2-3</label>
              <input
                id="3-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="3"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "3"}
              />
              <label htmlFor="3-freq-identity">3-4</label>
              <input
                id="5-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="4"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "5"}
              />
              <label htmlFor="5-freq-identity">5-6</label>
              <input
                id="everday-freq-identity"
                type="radio"
                name="exercise_frequency"
                value="5"
                onChange={handleChange}
                // checked={formData.exercise_frequency === "everday"}
              />
              <label htmlFor="everday-freq-identity">everday</label>
            </div>

            <label htmlFor="about">What Are You Interested In</label>
            <div className="multiple-input-container">
              <input
                id="running-sport-identity"
                type="radio"
                name="participate_running"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_running === "running"}
              />
              <label htmlFor="running-sport-identity">running</label>
              <input
                id="gym-sport-identity"
                type="radio"
                name="participate_gym"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_gym === "gym"}
              />
              <label htmlFor="gym-sport-identity">gym</label>
              <input
                id="team-sports-sport-identity"
                type="radio"
                name="participate_team"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_team === "team-sports"}
              />
              <label htmlFor="team-sports-sport-identity">teams</label>
              <input
                id="dance-sport-identity"
                type="radio"
                name="participate_dance"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_dance === "dance"}
              />
              <label htmlFor="dance-sport-identity">dance</label>
              <input
                id="yoga-sport-identity"
                type="radio"
                name="participate_yoga"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_yoga === "yoga"}
              />
              <label htmlFor="yoga-sport-identity">yoga</label>
              <input
                id="swimming-sport-identity"
                type="radio"
                name="participate_swimming"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_swimming === "swimming"}
              />
              <label htmlFor="swimming-sport-identity">swimming</label>
              <input
                id="lifting-sport-identity"
                type="radio"
                name="participate_lifting_weights"
                value="1"
                onChange={handleChange}
                // checked={formData.participate_lifting_weights === "weight-lifting"}
              />
              <label htmlFor="lifting-sport-identity">lifting</label>
            </div>

            <label>When Do You Prefer To Train</label>
            <div className="multiple-input-container">
              <input
                id="morning-time-identity"
                type="radio"
                name="time_identity"
                value="1"
                onChange={handleChange}
                // checked={formData.time_of_exercises_earlymorning === "morning"}
              />
              <label htmlFor="morning-time-identity">morning</label>
              <input
                id="afternoon-time-identity"
                type="radio"
                name="1"
                value="afternoon"
                onChange={handleChange}
                // checked={formData.time_of_exercises_afternoon === "afternoon"}
              />
              <label htmlFor="afternoon-time-identity">afternoon</label>
              <input
                id="evening-time-identity"
                type="radio"
                name="1"
                value="evening"
                onChange={handleChange}
                // checked={formData.time_of_exercises_evening === "evening"}
              />
              <label htmlFor="evening-time-identity">evening</label>
            </div>

            <label>Any Health Issues</label>
            <div className="multiple-input-container">
              <input
                id="yes-identity"
                type="radio"
                name="health"
                value="0"
                onChange={handleChange}
                // checked={formData.time_identity === "morning"}
              />
              <label htmlFor="yes-identity">yes</label>

              <input
                id="no-identity"
                type="radio"
                name="health"
                value="1"
                onChange={handleChange}
                // checked={formData.time_identity === "afternoon"}
              />
              <label htmlFor="no-identity">no</label>
            </div>

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {/* {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )} */}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
