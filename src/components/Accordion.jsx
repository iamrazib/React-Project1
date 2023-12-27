export default function Accordion() {

    const designAccord = {
      width: "80%",
      textAlign: "center",
      marginTop: "20px",
      marginLeft: "50px",
      color: "green",
    };

  return (
    <div style={designAccord}>
      <div className="collapse collapse-arrow bg-green-300">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          My Educational Background
        </div>
        <div className="collapse-content text-purple-600">
          <p>SSC - From Khulna Zilla School</p>
          <p>HSC - From Khulna Sundarban College</p>
          <p>BSC - From Khulna University, CSE Discipline</p>
          <p>MBA - From Southeast University</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-orange-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          My Work Experience
        </div>
        <div className="collapse-content text-amber-900">
          <p>Java Programmer - Netweaver Software Ltd (2008-2009)</p>
          <p>Assistant Manager, IT - Beximco Textiles Ltd (2010-2012)</p>
          <p>Developer - Dutch Bangla Bank (2013- 2019)</p>
          <p>FAVP - Mutual Trust Bank (2019-2022)</p>
          <p>SPO - Pubali Bank Limited (2023 - Present)</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-rose-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">My Hobbies</div>
        <div className="collapse-content text-lime-950">
          <p>Science Fiction Stories</p>
          <p>Sci-Fi Movies</p>
          <p>Tech News</p>
        </div>
      </div>
    </div>
  );
}
