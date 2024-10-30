'use client';
 
import { useState } from 'react';
 
export default function LikeButton({buttonlabel}) {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button onClick={handleClick}>{buttonlabel} ({likes})</button>;
}