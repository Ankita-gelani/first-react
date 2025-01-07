const Page1 = (Props) => {
    return (
      <>
        <div className="prps-card">
          <h1>{Props.haeding}</h1>
          <img src={Props.img} />
          <p>{Props.ftr}</p>
        </div>
      </>
    );
  };
  export default Page1;
  