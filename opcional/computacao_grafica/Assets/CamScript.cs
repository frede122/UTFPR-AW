using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamScript : MonoBehaviour
{
    bool cam;
    public GameObject car;
    // Start is called before the first frame update
    void Start()
    {
        cam = true;
    }

    // Update is called once per frame
    void Update()
    {
        cam = Input.GetKeyDown(KeyCode.Space) ? !cam : cam;
        if(cam)
        {
            transform.parent = car.transform;
        }
        else
        {
            transform.parent = null;
        }
    }
}
