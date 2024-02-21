package column

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Service interface {
	CreateColumn(boardId uuid.UUID, name string) (*models.Column, error)
	GetAllColumns(boardId uuid.UUID) ([]models.Column, error)
}

type colSvc struct {
	repo Repository
}

func (s *colSvc) CreateColumn(boardId uuid.UUID, name string) (*models.Column, error) {
	return s.repo.CreateColumn(boardId, name)

}

func (s *colSvc) GetAllColumns(boardId uuid.UUID) ([]models.Column, error) {
	return s.repo.GetAllColumns(boardId)
}

func NewService(r Repository) Service {
	return &colSvc{repo: r}
}
