


const Panel = ({ title, children }) => {
    return (
      <section className="panel">
        <h1>{title}</h1>
        {children}
      </section>
    )
  }

  export default Panel;