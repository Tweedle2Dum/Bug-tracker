package workspace

import "github.com/tweedle2dum/tracker/models"

type Repository interface {
	CreateWorkspace(email string ,name string, description string) (*models.Workspace, error)
	GetWorkspace(email string) (*models.Workspace, error)
	GetWorkspaces(email string) (*models.Workspace, error)
}
