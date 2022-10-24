using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptCam : MonoBehaviour
{
    public GameObject pc;
    public float recuo_direita = 2;
    public float recuo_esquerda = 2;
    private float offsetY = 2;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float pcX = pc.transform.position.x;
        float selfX = transform.position.x;
        float pcY = pc.transform.position.y + offsetY;

        Vector3 pos = new Vector3(selfX, pcY, -10);

        if ((pcX - recuo_direita) > selfX)
            pos = new Vector3(pcX -recuo_direita, pcY, -10);
        
        if ((pcX + recuo_direita) < selfX)
            pos = new Vector3(pcX + recuo_esquerda, pcY,-10);

        transform.position = pos;
    }
}
