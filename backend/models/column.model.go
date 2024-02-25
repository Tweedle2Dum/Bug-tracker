package models

import "github.com/google/uuid"

type Column struct {
	ID      uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
	Name    string    `json:"name"`
	BoardID uuid.UUID `json:"board_id"`
	Tasks   []Task    `json:"tasks"`
}
