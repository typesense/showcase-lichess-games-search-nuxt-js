export type Game = {
  id: string
  rated: boolean
  created_at: number
  last_move_at: number
  turns: number
  victory_status: string
  increment_code: string
  white_id: string
  winner: string
  white_rating: number
  black_id: string
  black_rating: number
  opening_eco: string
  opening_name: string
  opening_ply: number
}
