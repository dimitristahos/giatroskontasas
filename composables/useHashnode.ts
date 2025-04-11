import { request, gql } from 'graphql-request'

const endpoint = 'https://gql.hashnode.com'

// Fetch list of blog posts
export const getAllPosts = async (host: string) => {
    const query = gql`
    query GetPublicationPosts($host: String!) {
      publication(host: $host) {
        posts(first: 10) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `
    const variables = { host }
    const data = await request(endpoint, query, variables)
    return data.publication.posts.edges.map(edge => edge.node)
}

// Fetch a single blog post by slug
export const getPostBySlug = async (host: string, slug: string) => {
    const query = gql`
    query GetPostBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          brief
          coverImage {
            url
          }
          content {
            html
          }
          publishedAt
        }
      }
    }
  `
    const variables = { host, slug }
    const data = await request(endpoint, query, variables)
    return data.publication.post
}
