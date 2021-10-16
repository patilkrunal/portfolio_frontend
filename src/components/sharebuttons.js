import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const ShareButtons = ({ title, url, twitterHandle }) => {
  return (
    <div className="row mb-4">
      <div className="col-12 text-center">
        <FacebookShareButton url={url}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title} via={twitterHandle}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <RedditShareButton url={url} title={title}>
          <RedditIcon size={40} round={true} />
        </RedditShareButton>
      </div>
    </div>
  )
}
export default ShareButtons
