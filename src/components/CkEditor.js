import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditor = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        id="header"
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
    </div>
  );
};

export default CkEditor;
