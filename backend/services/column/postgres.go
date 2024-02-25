package column

import (
	"log"

	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
	"gorm.io/gorm"
)

type repo struct {
	DB *gorm.DB
}

func NewPostgresRepo(db *gorm.DB) Repository {
	return &repo{
		DB: db,
	}
}

func (r *repo) CreateColumn(boardId uuid.UUID, name string) (*models.Column, error) {
	column := &models.Column{
		Name:    name,
		BoardID: boardId,
	}

	err := r.DB.Create(column).Error
	if err != nil {
		return nil, err
	}
	return column, nil

}

func (r *repo) GetAllColumns(boardId uuid.UUID) ([]models.Column, error) {
	var columns []models.Column
	if err := r.DB.Where("board_id = ?", boardId).Find(&columns).Error; err != nil {
		log.Fatal(err)
		return nil , err 
	}
	return columns, nil

}
