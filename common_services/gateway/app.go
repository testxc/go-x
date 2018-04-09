package main

import (
	"github.com/fananchong/go-x/common"
)

var (
	xargs *Args          = &Args{}
	xlog  common.ILogger = common.NewGLogger()
)

type App struct {
	common.App
}

func NewApp() *App {
	this := &App{}
	this.Type = int(common.Gateway)
	this.Args = xargs
	this.Logger = xlog
	this.Node = NewNode()
	this.Derived = this
	return this
}

var runner = common.NewTcpServer()

func (this *App) OnAppReady() {
	go func() {
		runner.RegisterSessType(SessionAccount{})
		if runner.Start() == false {
			this.Close()
		}
	}()
}

func (this *App) OnAppShutDown() {
	runner.Close()
}
