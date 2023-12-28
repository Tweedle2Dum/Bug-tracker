package board

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Service interface {
	CreateBoard(workspaceId uuid.UUID ,description string, name string) (*models.Board,error)
}

type boardSvc struct {
	repo Repository
}


func NewService(r Repository) Service {
	return &boardSvc{repo: r}
}

func (s *boardSvc) CreateBoard(workspaceId uuid.UUID ,description string, name string) (*models.Board,error) {
	return s.repo.CreateBoard(workspaceId,name,description)
}
