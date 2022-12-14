import React from "react";
import { FaCheck } from "react-icons/fa";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

// The useFormFields is not necessary. You can use your own form component.

export default function MailChimp() {
  const url =
    "https://chessbattlegrounds.us11.list-manage.com/subscribe/post?u=1019c3f7e6c5492f0429be580&amp;id=f56e94f339&amp;f_id=00818de0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          type="email"
          value={fields.EMAIL}
          placeholder="Enter Your Email"
          onChange={handleFieldChange}
        />
        <button className="button button--secondary button--lg">
          <FaCheck />
          Pre-register
        </button>
      </form>
      {loading && "submitting"}
      {error && message}
      {success && message}
    </div>
  );
}
