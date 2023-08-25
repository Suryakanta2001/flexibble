"use client"

import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { ProjectInterface, SessionInterface } from '@/common.types';

type Props = {
  type: string,
  session: SessionInterface,
  project?: ProjectInterface
}

const ProjectForm = ({type,session,project}:Props) => {

  const handleFormSubmit=(e:React.FormEvent) => {};
  return (
    <form
      onSubmit={handleFormSubmit}
    >

    </form>
  )
}

export default ProjectForm