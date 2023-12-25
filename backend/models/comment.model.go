package models

import "github.com/google/uuid"

type Comment struct {
	ID        uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()" json:"id"`
	CreatedAt int       `json:"created_at"`
	UpdatedAt int       `json:"updated_at"`
	Text      string    `json:"text"`
	TaskID    uuid.UUID `json:"task_id"`
	UserID    uuid.UUID `json:"user_id"`
    User User `gorm:"foreignKey:Email" json:"user"`
	Task Task `json:"task"`


	

}



 
