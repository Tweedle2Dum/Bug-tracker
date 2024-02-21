package column

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Repository interface {
	CreateColumn(boardId uuid.UUID , name string) (*models.Column,error)
	GetAllColumns(boardId uuid.UUID) ([]models.Column,error)
}