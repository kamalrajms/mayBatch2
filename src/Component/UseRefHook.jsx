import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };
  // eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  //eg3

  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");

  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input ref={inputRef} type="text" placeholder="enter a data" />
        <button onClick={focusinput}>focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h2>timer:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input type="file" ref={imgRef} onChange={handleImage} hidden />
        {newProduct ? (
          <div className="container" onClick={() => imgRef.current.click()}>
            updating image..
          </div>
        ) : (
          <img
            className="org-img"
            src={imgURL}
            onClick={() => imgRef.current.click()}
            alt=""
          />
        )}
      </nav>
    </div>
  );
}
