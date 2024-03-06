import { PostListPageComponent } from "@/components/app/posts/post-list-page"
import { ProjectListPageComponent } from "@/components/app/projects/project-list-page"
import client from "@/tina/__generated__/client"
import React from "react"

export default async function ProjectListPage() {
  const result = await client.queries.projectConnection()
  return <ProjectListPageComponent {...result} />
}
