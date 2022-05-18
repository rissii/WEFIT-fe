import React from "react";
export default function Form() {
  const handleChange = () => {};
  return (
    <div>
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form>
          <section>
            <label>Age</label>
            <div className="multiple-input-container">
              <input
                id="young-age-identity"
                type="radio"
                name="age_identity"
                value="young"
                onChange={handleChange}
                // checked={formData.age_identity === "young"}
              />
              <label htmlFor="young-age-identity">15-18</label>
              <input
                id="twenties-age-identity"
                type="radio"
                name="age_identity"
                value="twenties"
                onChange={handleChange}
                // checked={formData.age_identity === "twenties"}
              />
              <label htmlFor="twenties-age-identity">19-25</label>
              <input
                id="mature-age-identity"
                type="radio"
                name="age_identity"
                value="mature"
                onChange={handleChange}
                // checked={formData.age_identity === "mature"}
              />
              <label htmlFor="mature-age-identity">26-30</label>
              <input
                id="thirties-age-identity"
                type="radio"
                name="age_identity"
                value="thirties"
                onChange={handleChange}
                // checked={formData.age_identity === "thirties"}
              />
              <label htmlFor="thirties-age-identity">30-40</label>
              <input
                id="old-age-identity"
                type="radio"
                name="age_identity"
                value="old"
                onChange={handleChange}
                // checked={formData.age_identity === "old"}
              />
              <label htmlFor="old-age-identity">40+</label>
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                // checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                // checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
            </div>
            <label htmlFor="show-gender">How Fit Are You</label>
            <div className="multiple-input-container">
              <input
                id="Starting-level-identity"
                type="radio"
                name="level_identity"
                value="Starting"
                onChange={handleChange}
                // checked={formData.level_identity === "Starting"}
              />
              <label htmlFor="Starting-level-identity">Starting</label>
              <input
                id="beginner-level-identity"
                type="radio"
                name="level_identity"
                value="beginner"
                onChange={handleChange}
                // checked={formData.level_identity === "beginner"}
              />
              <label htmlFor="beginner-level-identity">Beginner</label>
              <input
                id="Intermediate-level-identity"
                type="radio"
                name="level_identity"
                value="Intermediate"
                onChange={handleChange}
                // checked={formData.level_identity === "Intermediate"}
              />
              <label htmlFor="Intermediate-level-identity">Intermediate</label>
              <input
                id="experienced-level-identity"
                type="radio"
                name="level_identity"
                value="experienced"
                onChange={handleChange}
                // checked={formData.level_identity === "experienced"}
              />
              <label htmlFor="experienced-level-identity">Experienced</label>
              <input
                id="athlete-level-identity"
                type="radio"
                name="level_identity"
                value="athlete"
                onChange={handleChange}
                // checked={formData.level_identity === "athlete"}
              />
              <label htmlFor="athlete-level-identity">Athlete</label>
            </div>
            <label>How Often Do You Train A Week</label>
            <div className="multiple-input-container">
              <input
                id="0-freq-identity"
                type="radio"
                name="freq_identity"
                value="0"
                onChange={handleChange}
                // checked={formData.freq_identity === "0"}
              />
              <label htmlFor="0-freq-identity">0</label>
              <input
                id="1-freq-identity"
                type="radio"
                name="freq_identity"
                value="1"
                onChange={handleChange}
                // checked={formData.freq_identity === "1"}
              />
              <label htmlFor="1-freq-identity">1-2</label>
              <input
                id="2-freq-identity"
                type="radio"
                name="freq_identity"
                value="2"
                onChange={handleChange}
                // checked={formData.freq_identity === "2"}
              />
              <label htmlFor="2-freq-identity">2-3</label>
              <input
                id="3-freq-identity"
                type="radio"
                name="freq_identity"
                value="3"
                onChange={handleChange}
                // checked={formData.freq_identity === "3"}
              />
              <label htmlFor="3-freq-identity">3-4</label>
              <input
                id="5-freq-identity"
                type="radio"
                name="freq_identity"
                value="5"
                onChange={handleChange}
                // checked={formData.freq_identity === "5"}
              />
              <label htmlFor="5-freq-identity">5-6</label>
              <input
                id="everday-freq-identity"
                type="radio"
                name="freq_identity"
                value="everday"
                onChange={handleChange}
                // checked={formData.freq_identity === "everday"}
              />
              <label htmlFor="everday-freq-identity">everday</label>
            </div>
            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              //   value={formData.about}
              onChange={handleChange}
            />
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