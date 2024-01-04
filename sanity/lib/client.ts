import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skYKPQqTyqS55qElrrUkOnCACxqw0qPuxn5aB9gzZ3ThXbQsLSjU62iU8OojVunZwnvPWISG8GmuJcXOOW4P139QVWrKGZfp8LUQ7MQGHtOvdqCUVxqNyOm0YkJpzy0q1mGOzQKzcKjQcTI1AoK3wguoS3kkeI5J1DouTrqsx8RahlwCOP0g"
})
