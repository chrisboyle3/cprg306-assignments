import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  const name = "Chris Boyle";
  const githubRepoUrl = "https://github.com/chrisboyle3/cprg306-assignments.git";

  return (
    <div>
      <h1>{name}</h1>
      <Link href={githubRepoUrl}>Link to GitHub Repository</Link>      
    </div>
  );
}

export default StudentInfo;